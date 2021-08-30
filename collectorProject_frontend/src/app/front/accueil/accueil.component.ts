import { Component, OnInit } from '@angular/core';
import {AccueilService} from "./accueil.service";
import {Publication} from "../../model/publication";
import {Categorie} from "../../model/categorie";
declare var jQuery:any;


@Component({
  selector: 'app-acceuil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

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

  findAllCategories(){
    this.accueilService.findAllCategorie();
  }

  listPublications(): Array<Publication> {
    return this.accueilService.publications;
  }

  listCategories(): Array<Categorie> {
    return this.accueilService.categories;
  }

}
