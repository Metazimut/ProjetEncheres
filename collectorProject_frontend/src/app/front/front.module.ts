import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';
import {RdvFuturComponent} from "./rdv-futur/rdv-futur.component";
import {ConsultationComponent} from "./consultation/consultation.component";
import { CreneauComponent } from './creneau/creneau.component';
import {PatientComponent} from "./patient/patient.component";
import {LieuComponent} from "./lieu/lieu.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {PraticienComponent} from "./praticien/praticien.component";



@NgModule({
  declarations: [
    PlanningComponent,
    RdvFuturComponent,
    ConsultationComponent,
    CreneauComponent,
    PatientComponent,
    LieuComponent,
    AccueilComponent,
    PraticienComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FrontModule { }
