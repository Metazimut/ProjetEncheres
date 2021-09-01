import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {SessionService} from "../../session.service";
import {Publication} from "../../model/publication";
import {ParticipationEnchere} from "../../model/participationEnchere";

@Injectable({
  providedIn: 'root'
})
export class MesEncheresService {
  encheres: Array<ParticipationEnchere> = new Array<ParticipationEnchere>();
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService, private sessionService:SessionService) {
    this.chemin = this.appconfig.backEndUrl + "participation/";
  }

  findAllEnchereByUser() {
    this.http.get<Array<ParticipationEnchere>>(this.chemin).subscribe(response => {
      //filter to have only related to users
      this.encheres = response.filter(publication => publication.utilisateur?.id == this.sessionService.user.utilisateur.id);
      //sort by prixProposition
      this.encheres = this.encheres.sort((a,b) => b.prixProposition - a.prixProposition);
      //filter to have only the last enchere for one publication and one user
      this.encheres = this.encheres.filter((a,i) => this.encheres.findIndex((s) => a.publication.id === s.publication.id) === i);
      console.log(this.encheres);
    }, error => console.log(error));
  }
}
