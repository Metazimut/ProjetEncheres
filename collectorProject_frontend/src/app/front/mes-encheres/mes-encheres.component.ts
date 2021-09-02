import { Component, OnInit } from '@angular/core';
import {MesEncheresService} from "./mes-encheres.service";
import {Publication} from "../../model/publication";
import {ParticipationEnchere} from "../../model/participationEnchere";


@Component({
  selector: 'app-mes-encheres',
  templateUrl: './mes-encheres.component.html',
  styleUrls: ['./mes-encheres.component.scss']
})
export class MesEncheresComponent implements OnInit {

  constructor(private mesEncheresService:MesEncheresService) {
    this.findAllEncheresByUser();
  }

  ngOnInit(): void {
  }

  findAllEncheresByUser(){
    this.mesEncheresService.findAllEnchereByUser();
  }

  listEncheresByUtilisateur(): Array<ParticipationEnchere> {
    return this.mesEncheresService.encheres;
  }

  listEncheresByUtilisateurPast(): Array<ParticipationEnchere> {
    let encheresFilter: Array<ParticipationEnchere> = new Array<ParticipationEnchere>();
    for(var i = 0; i < this.mesEncheresService.encheres.length; i++){
      if(this.timeDiff(this.mesEncheresService.encheres[i].publication.dateEcheance) < 0){
        encheresFilter.push(this.mesEncheresService.encheres[i]);
      }
    }
    return encheresFilter;
  }

  listEncheresByUtilisateurActual(): Array<ParticipationEnchere> {
    let encheresFilter: Array<ParticipationEnchere> = new Array<ParticipationEnchere>();
    for(var i = 0; i < this.mesEncheresService.encheres.length; i++){
      if(this.timeDiff(this.mesEncheresService.encheres[i].publication.dateEcheance) > 0){
        encheresFilter.push(this.mesEncheresService.encheres[i]);
      }
    }
    return encheresFilter;
  }

  timeDiff(value: Date): number{
    let time=new Date();
    let echeance=new Date(value);
    return echeance.getTime()-time.getTime();
  }

}
