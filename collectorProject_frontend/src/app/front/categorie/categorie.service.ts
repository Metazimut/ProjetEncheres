import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Categorie} from "../../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categorie: Categorie = new Categorie();
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl;
  }
}
