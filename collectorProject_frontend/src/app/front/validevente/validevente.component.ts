import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Publication} from "../../model/publication";
import {VenteHttpService} from "../vente/vente-http.service";
import {Categorie} from "../../model/categorie";
import {Router} from "@angular/router";

@Component({
  selector: 'validevente',
  templateUrl: './validevente.component.html',
  styleUrls: ['./validevente.component.scss']
})
export class ValideventeComponent implements OnInit {

  img: string = "";
  id : number;
  publi : Publication = new Publication();


  constructor(private route: ActivatedRoute, private publiService: VenteHttpService, private router : Router) {


  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id=param.id
      this.publiService.findPublicationById(param.id).subscribe(param2 => {
        this.publi = param2
      })
    })
  }

  test() {
    console.log(this.publi)
  }


  save() {
    this.router.navigate(['/accueil'])

  }

  cancel() {
    //

    this.publiService.deletePublicationById(this.id).subscribe(param3 => {
      console.log("test");
      this.router.navigate(['/vente']) })

  }

  // deletevente(){
  //   this.publiService.deletePublicationById(this.id)
  // }


}
