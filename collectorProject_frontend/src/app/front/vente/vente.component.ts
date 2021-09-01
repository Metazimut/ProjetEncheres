import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Publication} from "../../model/publication";
import {Categorie} from "../../model/categorie";
import {Utilisateur} from "../../model/utilisateur";
import {VenteHttpService} from "./vente-http.service";
import {newArray} from "@angular/compiler/src/util";
import {Commentaire} from "../../model/commentaire";
import {SessionService} from "../../session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
   publication:Publication = new Publication();
    img : string = "";
    categories : Array<Categorie> = new Array<Categorie>();
    aujourdhui:Date = new Date();
    datefin:Date = new Date();

    prixdepart:number=1;
    prixreserve:number=1;

  categorie : Categorie=new Categorie();


  constructor(private venteService : VenteHttpService, private connectedService : SessionService, private router : Router)
  {
    this.publication.categorie=new Categorie();
    this.publication.publicateur=new Utilisateur();
  }

  ngOnInit(): void {
    this.venteService.findAllCategorie().subscribe(params =>{
      this.categories=params;

    })
  }

createPublication(){

    console.log(this.connectedService.user);
    if(this.connectedService.user) {
      this.publication.img=this.img;
      this.publication.prixDepart=this.prixdepart;
      this.publication.prixActuel=this.prixdepart;
      this.publication.dateEcheance=this.datefin;
      this.publication.publicateur.id=this.connectedService.user.utilisateur.id;
      this.publication.categorie.id=this.categorie.id;
      console.log(this.publication)
      this.venteService.createAnnonce(this.publication).subscribe(response => {
        let id : number = response.id;
        this.router.navigate(['/vente/valider/'+id])
      });
    }else{alert("Vous n'êtes pas connecté")}
 // this.publication.publicateur=null //a virer quand connection ok

}


  // validateAnnonce()
  // {
  //   let tab=this.img.split("\\");
  //   console.log(tab);
  //   this.publication.img=tab[tab.length-1];
  //   console.log(this.publication);
  // }

  validateAnnonce()
  {

  }
 test(){
    console.log(this.categorie.id)
 }

}
