import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Publication} from "../model/publication";
import {Categorie} from "../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  publications: Array<Publication> = new Array<Publication>();
  categories: Array<Categorie> = new Array<Categorie>();
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl;
  }

  findAllPublication() {
    this.http.get<Array<Publication>>(this.chemin + "publication/").subscribe(response => {
      this.publications = response;
    }, error => console.log(error));
  }

  findAllCategorie() {
    this.http.get<Array<Categorie>>(this.chemin + "categorie/").subscribe(response => {
      this.categories = response;
    }, error => console.log(error));
  }
}
