import { Component, OnInit } from '@angular/core';
import {MesPublicationsService} from "./mes-publications.service";
import {Publication} from "../../model/publication";
import {SessionService} from "../../session.service";

@Component({
  selector: 'app-mes-publications',
  templateUrl: './mes-publications.component.html',
  styleUrls: ['./mes-publications.component.scss']
})
export class MesPublicationsComponent implements OnInit {

  constructor(private mesPublicationsService:MesPublicationsService) {
    this.findAllPublicationsByUser();
  }

  ngOnInit(): void {
  }

  findAllPublicationsByUser(){
    this.mesPublicationsService.findAllPublicationByUser();
  }

  listPublicationsByUtilisateur(): Array<Publication> {
    return this.mesPublicationsService.publications;
  }

  listPublicationsByUtilisateurPast(): Array<Publication> {
    let publicationsFilter: Array<Publication> = new Array<Publication>();
    for(var i = 0; i < this.mesPublicationsService.publications.length; i++){
      if(this.timeDiff(this.mesPublicationsService.publications[i].dateEcheance) < 0){
        publicationsFilter.push(this.mesPublicationsService.publications[i]);
      }
    }
    return publicationsFilter;
  }

  listPublicationsByUtilisateurActual(): Array<Publication> {
    let publicationsFilter: Array<Publication> = new Array<Publication>();
    for(var i = 0; i < this.mesPublicationsService.publications.length; i++){
      if(this.timeDiff(this.mesPublicationsService.publications[i].dateEcheance) > 0){
        publicationsFilter.push(this.mesPublicationsService.publications[i]);
      }
    }
    return publicationsFilter;
  }

  timeDiff(value: Date): number{
    let time=new Date();
    let echeance=new Date(value);
    return echeance.getTime()-time.getTime();
  }
}
