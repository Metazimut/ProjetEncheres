import { Injectable } from '@angular/core';
import {Publication} from "../../model/publication";
import {Observable} from "rxjs";
import {Categorie} from "../../model/categorie";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";


@Injectable({
  providedIn: 'root'
})
export class VenteHttpService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

findAllCategorie(): Observable<Array<Categorie>> {
  return this.http.get<Array<Categorie>>(this.appConfigService.backEndUrl + "categorie/");
}

createAnnonce(publi:Publication): Observable<Publication>{
    return this.http.post<Publication>(this.appConfigService.backEndUrl+"publication/",publi);

}

findPublicationById(id: number): Observable<Publication>{
    return this.http.get<Publication>(this.appConfigService.backEndUrl+"publication/"+id);
}

  deletePublicationById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "publication/" + id);
  }
}
