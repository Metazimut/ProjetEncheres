import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../model/categorie";
import {CategorieCreationEditionService} from "./categorie-creation-edition.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categorie-creation-edition',
  templateUrl: './categorie-creation-edition.component.html',
  styleUrls: ['./categorie-creation-edition.component.scss']
})
export class CategorieCreationEditionComponent implements OnInit {
  categorieForm: Categorie = new Categorie();
  profilImgTmp: string = null;
  profilImgTmpURL: string = null;

  constructor(private adminCategorieService:CategorieCreationEditionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.categorieForm.id = params.id;
        this.loadCategorieByidWithPublication(params.id);
      }
    })
  }

  save(): void{
    if(this.verifyCategorieContent()){
      if (this.categorieForm.id) {
        this.adminCategorieService.modify(this.categorieForm).subscribe(resp => {
          this.categorieForm = resp;
        });
      } else {
        this.adminCategorieService.create(this.categorieForm).subscribe(resp => {
          this.categorieForm = resp;
        });
      }
    }
  }

  verifyCategorieContent(): boolean{
    let ok:boolean=true;
    if(!this.categorieForm.categorieNom){ok=false}
    else if(!this.categorieForm.imgCat){ok=false}
    if (!ok){
      alert("veuillez renseigner tous les champs");
    }
    return ok;
  }

  loadImg() {
    if(this.profilImgTmpURL) {
      if (this.profilImgTmpURL.slice(0,4)=="http"){
        this.categorieForm.imgCat =this.profilImgTmpURL;
      }
    }else if(this.profilImgTmp) {
      this.spliceImg();
    }
  }

  spliceImg()
  {
    let tab = this.profilImgTmp.split("\\");
    this.categorieForm.imgCat = "../../../assets/profilImg/"+tab[tab.length - 1];
  }

  cancel() {
    this.categorieForm = null;
  }

  loadCategorieByidWithPublication(id:number)  {
    this.adminCategorieService.findCategorieByidWithPublication(id).subscribe(response=>
      {
        this.categorieForm=response;
        console.log(this.categorieForm);
      },
      error=>console.log(error));
  }

}
