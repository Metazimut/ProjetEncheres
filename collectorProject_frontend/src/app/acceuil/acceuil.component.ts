import { Component, OnInit } from '@angular/core';
import {AcceuilService} from "./acceuil.service";
import {Publication} from "../model/publication";
import {Categorie} from "../model/categorie";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  constructor(private accueilService:AcceuilService) {
    this.findAllCategories();
    this.findAllPublications();
  }

  ngOnInit(): void {
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
