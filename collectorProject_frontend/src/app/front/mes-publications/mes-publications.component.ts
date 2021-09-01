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
}
