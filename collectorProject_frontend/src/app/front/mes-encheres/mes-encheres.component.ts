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

  timeDiff(value: Date): number{
    let time=new Date();
    let echeance=new Date(value);
    return echeance.getTime()-time.getTime();
  }

}
