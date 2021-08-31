import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { AchatComponent } from './achat/achat.component';
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {FormsModule} from "@angular/forms";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnectionComponent} from "./connection/connection.component";
import {RouterModule} from "@angular/router";
import { CategorieComponent } from './categorie/categorie.component';
import {AdminComponent} from "./admin/admin.component";



@NgModule({
  declarations: [
    AchatComponent,
    UtilisateurComponent,
    AccueilComponent,
    ConnectionComponent,
    CategorieComponent,
    AdminComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class FrontModule { }
