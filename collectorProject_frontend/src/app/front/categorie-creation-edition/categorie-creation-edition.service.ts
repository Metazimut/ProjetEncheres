import { Injectable } from '@angular/core';
import {Categorie} from "../../model/categorie";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class CategorieCreationEditionService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

  create(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.appConfigService.backEndUrl + "categorie/", categorie);
  }

  modify(categorie: Categorie): Observable<Categorie>{
    return this.http.put<Categorie>(this.appConfigService.backEndUrl + "categorie/" + categorie.id, categorie);
  }

  findCategorieByidWithPublication(id:number): Observable<Categorie> {
    return this.http.get<Categorie>(this.appConfigService.backEndUrl + "categorie/"+id);
  }
}
