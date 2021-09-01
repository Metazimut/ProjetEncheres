import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Publication} from "../../model/publication";
import {Categorie} from "../../model/categorie";
import {Utilisateur} from "../../model/utilisateur";

@Component({
  selector: 'vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
   publication:Publication = new Publication();
    img : string;

  constructor()
  {
    this.publication.commentaires=null;
    this.publication.dateEcheance=null;
    this.publication.prixActuel=20;
    this.publication.prixDepart=1;
    this.publication.categorie=new Categorie();
    this.publication.publicateur=new Utilisateur();
    this.publication.version=0;
    this.publication.categorie.id=1;
  }

  ngOnInit(): void {
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

}
