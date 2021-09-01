import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UtilisateurComponent} from "./front/utilisateur/utilisateur.component";
import {AccueilComponent} from "./front/accueil/accueil.component";
import {ConnectionComponent} from "./front/connection/connection.component";
import {AchatComponent} from "./front/achat/achat.component";
import {AdminComponent} from "./front/admin/admin.component";
import {CategorieComponent} from "./front/categorie/categorie.component";
import {MesPublicationsComponent} from "./front/mes-publications/mes-publications.component";
import {MesEncheresComponent} from "./front/mes-encheres/mes-encheres.component";



const routes: Routes = [
  {path: "mesEncheres", component: MesEncheresComponent},
  {path: "mesPublications", component: MesPublicationsComponent},
  {path: "utilisateur/:id", component: UtilisateurComponent},
  {path: "utilisateur", component: UtilisateurComponent},
  {path: "categorie/:id", component: CategorieComponent},
  {path: "compteUtilisateur", component: UtilisateurComponent},
  {path: "compteAdmin", component: AdminComponent },
  // {path: "praticien", component: PraticienComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "connection", component: ConnectionComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"},
  //{path: "planning/:id", component: PlanningComponent},
  {path: "achat/:id", component: AchatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
