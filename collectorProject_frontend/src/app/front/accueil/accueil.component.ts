import { Component, OnInit } from '@angular/core';
import {AccueilService} from "./accueil.service";
import {Publication} from "../../model/publication";
import {Categorie} from "../../model/categorie";
import {ActivatedRoute} from "@angular/router";
import {distinct} from "rxjs/operators";
declare var jQuery:any;


@Component({
  selector: 'app-acceuil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  publicationsByNom : Array<Publication> = null;
  categorieByNom : Array<Categorie> = null;
  name: Array<string> = new Array<string>();
  nomPublication:string=null;
  nomCategorie:string=null;

  constructor(private accueilService:AccueilService) {
    this.findAllPublications();
    this.findAllCategories();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (jQuery(".selectpicker").length != 0) {
      setTimeout(function () {
        jQuery(".selectpicker").selectpicker('refresh');   // refresh the selectpicker with fetched courses
      }, 1000);
    }
  }

  findAllPublications(){
    this.accueilService.findAllPublication();
  }

  findAllPublicationsByNom(nom:string)  {
    this.accueilService.findAllPublicationByNom(nom).subscribe(response=>
      {
        this.publicationsByNom=response;
        console.log(this.publicationsByNom);
      },
      error=>console.log(error));
  }

  findAllCategoriesByNom(nom:string)  {
    this.accueilService.findAllCategorieByNom(nom).subscribe(response=>
      {
        this.categorieByNom=response;
        console.log(this.categorieByNom);
      },
      error=>console.log(error));
  }

  findAllCategories(){
    this.accueilService.findAllCategorie();
  }

  listPublications(): Array<Publication> {
    return this.accueilService.publications;
  }

  listPublicationsNom() : Array<string> {
    for(var indice = 0; indice < this.accueilService.publications.length; indice++){
      this.name[indice] = this.accueilService.publications[indice].nom;
    }
    var unique = this.name.filter((v, i, a) => a.indexOf(v) === i);
    return unique;
  }

  listCategories(): Array<Categorie> {
    return this.accueilService.categories;
  }

}
