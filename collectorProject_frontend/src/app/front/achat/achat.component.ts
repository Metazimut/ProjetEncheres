import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AchatHttpService} from "./achatHttp.service";
import {AchatDTO} from "../../model/achatDTO";
import {Publication} from "../../model/publication";
import {Commentaire} from "../../model/commentaire";
import {ParticipationEnchere} from "../../model/participationEnchere";
import {interval, Subscription} from "rxjs";
import {SessionService} from "../../session.service";
import {Utilisateur} from "../../model/utilisateur";
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

  publisSimilaires: Array<Publication>;

  // pour:number=this.randomInt(5,103);
  // contre:number=this.randomInt(0,97);
  pour:number=1;
  contre:number=1;
  recommandation:number=this.pour+this.contre;
  pourcentageRecomm:number=Math.floor((this.pour/(this.pour+this.contre)*100));
  clicked=false;

  new_enchere:number;
  enchereLancee:ParticipationEnchere=new ParticipationEnchere();

  commentaireEnCours:string;
  commEnvoye: Commentaire = new Commentaire();

  confirm:boolean=false;


  constructor(private route: ActivatedRoute, private achatService: AchatHttpService, private connectedService: SessionService) {
    this.achatForm.publication=new Publication();
    this.achatForm.commentaires=new Array<Commentaire>();
    this.achatForm.encheres=new Array<ParticipationEnchere>();
    this.new_enchere=0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.achatService.findById(params.id).subscribe(ach => {
        this.achatForm.publication=ach.publication;
        this.achatForm.commentaires=ach.commentaires;
        this.achatForm.encheres=ach.encheres;
        this.PubliAleatoiresMemeCategorie();
        this.triCommentaires();
        this.new_enchere=this.achatForm.publication.prixActuel+1;
        console.log("test user : "+this.connectedService.user.utilisateur.nom)
        });
      })
    this.subscription=interval(1000).subscribe(x => {
      this.countdown=this.timeDiff(this.achatForm.publication.dateEcheance);})
  }




  nouvelleEnchere() {
    this.enchereLancee.prixProposition=this.new_enchere;
    this.enchereLancee.placeNb=0;
    this.enchereLancee.utilisateur=new Utilisateur();
    this.enchereLancee.utilisateur.id=this.connectedService.user.utilisateur.id;
    this.enchereLancee.publication=new Publication();
    this.enchereLancee.publication.id=this.id;

    this.achatService.createEnch(this.id, this.enchereLancee).subscribe( x => {
      // load
      // this.achatService.findById(this.id).subscribe( param => {
      //   this.achatForm.commentaires=param.commentaires;
      //   this.triCommentaires();
      // })
    });
  }





  posterComm() {
    this.commEnvoye.utilisateur=new Utilisateur();
     this.commEnvoye.utilisateur.id=this.connectedService.user.utilisateur.id;
     this.commEnvoye.publication=new Publication();
     this.commEnvoye.publication.id=this.id;
     this.commEnvoye.dateCreation=new Date();
     this.commEnvoye.message=this.commentaireEnCours;
     this.achatService.createComm(this.id, this.commEnvoye).subscribe( x => {
       // load
       this.achatService.findById(this.id).subscribe( param => {
         this.achatForm.commentaires=param.commentaires;
         this.triCommentaires();
       })
     });
  }










PubliAleatoiresMemeCategorie() {
    let id = this.achatForm.publication.categorie.id;
    this.achatService.findAllByCategorie(id).subscribe( param => {
      this.publisSimilaires=param;
      for (let i = 0; i < this.publisSimilaires.length; i++)
      {
        if (this.publisSimilaires[i].id==this.achatForm.publication.id) {
          this.publisSimilaires.splice(i,1);
          break;
        }

      }
      this.shuffle();
    })
}



triCommentaires() {
    for (let i = 0; i < this.achatForm.commentaires.length; i++)
    {
      let k=i;
      for (let j= i+1; j< this.achatForm.commentaires.length-1; j++) {
        let date1=new Date(this.achatForm.commentaires[i].dateCreation);
        let date2=new Date(this.achatForm.commentaires[j].dateCreation);
        if (date1<date2) {
          k=j;
        }
      }
    [this.achatForm.commentaires[i], this.achatForm.commentaires[k]] = [this.achatForm.commentaires[k], this.achatForm.commentaires[i]];
    }
}





voterPour() {
    this.pour+=1;
  this.recommandation=this.pour+this.contre;
  this.pourcentageRecomm=Math.floor((this.pour/(this.pour+this.contre)*100));
}

  voterContre() {
    this.contre+=1;
    this.recommandation=this.pour+this.contre;
    this.pourcentageRecomm=Math.floor((this.pour/(this.pour+this.contre)*100));
  }


shuffle() {
  for (let i = this.publisSimilaires.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.publisSimilaires[i], this.publisSimilaires[j]] = [this.publisSimilaires[j], this.publisSimilaires[i]];
  }

}




randomInt(min:number,max:number): number {
    return Math.floor(min + Math.random() * max);
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
