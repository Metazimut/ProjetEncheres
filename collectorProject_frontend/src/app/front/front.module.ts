import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AchatComponent } from './achat/achat.component';
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {FormsModule} from "@angular/forms";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ConnectionComponent} from "./connection/connection.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    // AchatComponent,
    UtilisateurComponent,
    AcceuilComponent,
    ConnectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class FrontModule { }
