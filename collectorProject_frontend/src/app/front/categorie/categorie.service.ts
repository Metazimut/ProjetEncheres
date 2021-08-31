import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Categorie} from "../../model/categorie";
import {Observable} from "rxjs";
import {Publication} from "../../model/publication";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl;
  }

  findCategorieByidWithPublication(id:number): Observable<Categorie> {
    return this.http.get<Categorie>(this.chemin + "categorie/"+id);
  }
}
