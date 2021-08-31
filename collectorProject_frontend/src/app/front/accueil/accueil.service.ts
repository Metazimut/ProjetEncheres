import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Publication} from "../../model/publication";
import {Categorie} from "../../model/categorie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  publications: Array<Publication> = new Array<Publication>();
  categories: Array<Categorie> = new Array<Categorie>();
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl;
  }

  findAllPublication() {
    this.http.get<Array<Publication>>(this.chemin + "publication/").subscribe(response => {
      this.publications = response;
      console.log(response);
    }, error => console.log(error));
  }

  findAllPublicationByNom(nom:string): Observable<Array<Publication>> {
    return this.http.get<Array<Publication>>(this.chemin + "publication/nom/"+nom);
  }

  findAllCategorieByNom(nom:string): Observable<Array<Categorie>> {
    return this.http.get<Array<Categorie>>(this.chemin + "categorie/nom/"+nom);
  }

  findAllCategorie() {
    this.http.get<Array<Categorie>>(this.chemin + "categorie/").subscribe(response => {
      this.categories = response;
      console.log(response);
    }, error => console.log(error));
  }
}
