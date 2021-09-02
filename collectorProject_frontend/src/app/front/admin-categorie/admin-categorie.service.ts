import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Observable} from "rxjs";
import {Categorie} from "../../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class AdminCategorieService {
  categories: Array<Categorie> = new Array<Categorie>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

  findAllCategorie() {
    this.http.get<Array<Categorie>>(this.appConfigService.backEndUrl + "categorie/").subscribe(response => {
      this.categories = response;
      console.log(response);
    }, error => console.log(error));
  }
}
