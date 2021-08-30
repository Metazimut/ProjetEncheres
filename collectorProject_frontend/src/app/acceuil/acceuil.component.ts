import { Component, OnInit } from '@angular/core';
import {AcceuilService} from "./acceuil.service";
import {Publication} from "../model/publication";
import {Categorie} from "../model/categorie";
declare var jQuery:any;


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  constructor(private accueilService:AcceuilService) {
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
