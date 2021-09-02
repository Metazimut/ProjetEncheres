import { Component, OnInit } from '@angular/core';
import {AdminCategorieService} from "./admin-categorie.service";
import {Categorie} from "../../model/categorie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-categorie',
  templateUrl: './admin-categorie.component.html',
  styleUrls: ['./admin-categorie.component.scss']
})
export class AdminCategorieComponent implements OnInit {

  constructor(private adminCategorieService: AdminCategorieService, private route: ActivatedRoute) {
    this.findAllCategories();
  }

  ngOnInit(): void {
  }

  findAllCategories(){
    this.adminCategorieService.findAllCategorie();
  }

  listCategories(): Array<Categorie> {
    return this.adminCategorieService.categories;
  }
}
