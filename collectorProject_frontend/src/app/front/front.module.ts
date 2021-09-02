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
import {MesEncheresComponent} from "./mes-encheres/mes-encheres.component";
import {VenteComponent} from "./vente/vente.component";
import {ValideventeComponent} from "./validevente/validevente.component";
import { AdminCategorieComponent } from './admin-categorie/admin-categorie.component';
import { CategorieCreationEditionComponent } from './categorie-creation-edition/categorie-creation-edition.component';



@NgModule({
  declarations: [
    AchatComponent,
    UtilisateurComponent,
    AccueilComponent,
    ConnectionComponent,
    CategorieComponent,
    AdminComponent,
    MesPublicationsComponent,
    MesEncheresComponent,
    VenteComponent,
    ValideventeComponent,
    AdminCategorieComponent,
    CategorieCreationEditionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class FrontModule { }
