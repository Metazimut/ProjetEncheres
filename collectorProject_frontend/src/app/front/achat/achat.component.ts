import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AchatHttpService} from "./achatHttp.service";
import {AchatDTO} from "../../model/achatDTO";
import {Publication} from "../../model/publication";
import {Commentaire} from "../../model/commentaire";
import {ParticipationEnchere} from "../../model/participationEnchere";
import {interval, Subscription} from "rxjs";
declare var jQuery:any;


@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.scss']
})
export class AchatComponent implements OnInit {
  id: number;
  achatForm: AchatDTO = new AchatDTO();

  subscription: Subscription;
  daysToDday: number;
  hoursToDday: number;
  minutesToDday: number;
  secondsToDday: number;

  countdown: string;

  constructor(private route: ActivatedRoute, private achatService: AchatHttpService) {
    this.achatForm.publication=new Publication();
    this.achatForm.commentaires=new Array<Commentaire>();
    this.achatForm.encheres=new Array<ParticipationEnchere>();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.achatService.findById(params.id).subscribe(ach => {
        this.achatForm.publication=ach.publication;
        this.achatForm.commentaires=ach.commentaires;
        console.log(this.achatForm.commentaires);
        this.achatForm.encheres=ach.encheres;
        });
      })
    this.subscription=interval(1000).subscribe(x => {
      this.countdown=this.timeDiff(this.achatForm.publication.dateEcheance);})
  }











private timeDiff(value: Date): string{
  let time=new Date();
  let echeance=new Date(value);
  let difference= echeance.getTime()-time.getTime();
  this.allocateTimeUnits(difference);
  return (this.daysToDday+" jours "+this.hoursToDday+" h "+this.minutesToDday+" min "+this.secondsToDday+" s.");
}

  private allocateTimeUnits (timeDifference: number) {

    let milliSecondsInASecond = 1000;
    let hoursInADay = 24;
    let minutesInAnHour = 60;
    let SecondsInAMinute  = 60;

    this.secondsToDday = Math.floor((timeDifference) / (milliSecondsInASecond) % SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (milliSecondsInASecond * minutesInAnHour) % SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (milliSecondsInASecond * minutesInAnHour * SecondsInAMinute) % hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (milliSecondsInASecond * minutesInAnHour * SecondsInAMinute * hoursInADay));
  }





}
