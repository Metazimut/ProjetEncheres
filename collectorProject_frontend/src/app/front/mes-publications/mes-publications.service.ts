import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Publication} from "../../model/publication";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Compte} from "../../model/compte";
import {Utilisateur} from "../../model/utilisateur";
import {SessionService} from "../../session.service";

@Injectable({
  providedIn: 'root'
})
export class MesPublicationsService {
  publications: Array<Publication> = new Array<Publication>();
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService, private sessionService:SessionService) {
    this.chemin = this.appconfig.backEndUrl + "publication/";
  }

  findAllPublicationByUser() {
    this.http.get<Array<Publication>>(this.chemin).subscribe(response => {
      this.publications = response.filter(publication => publication.publicateur?.id == this.sessionService.user.utilisateur.id);
            console.log(response);
    }, error => console.log(error));
  }
}
