import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AchatComponent } from './achat/achat.component';
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    // AchatComponent,
    UtilisateurComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FrontModule { }
