import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { AchatComponent } from './achat/achat.component';
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnectionComponent} from "./connection/connection.component";
import {RouterModule} from "@angular/router";
import { CategorieComponent } from './categorie/categorie.component';
import {AdminComponent} from "./admin/admin.component";
import { MesPublicationsComponent } from './mes-publications/mes-publications.component';



@NgModule({
  declarations: [
    AchatComponent,
    UtilisateurComponent,
    AccueilComponent,
    ConnectionComponent,
    CategorieComponent,
    AdminComponent,
    MesPublicationsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class FrontModule { }
