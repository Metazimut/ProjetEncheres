import { Component, OnInit } from '@angular/core';
import {CategorieService} from "./categorie.service";
import {Categorie} from "../../model/categorie";
import {ActivatedRoute} from "@angular/router";
import {SessionService} from "../../session.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categorie: Categorie = new Categorie();

  constructor(private categorieService:CategorieService, private route: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categorie.id = params.id;
      this.loadCategorieByidWithPublication(params.id);
    })
  }

  isConnected(): boolean {
    return this.sessionService.user != null;
  }

  loadCategorieByidWithPublication(id:number)  {
    this.categorieService.findCategorieByidWithPublication(id).subscribe(response=>
      {
        this.categorie=response;
        console.log(this.categorie);
      },
      error=>console.log(error));
  }
}
