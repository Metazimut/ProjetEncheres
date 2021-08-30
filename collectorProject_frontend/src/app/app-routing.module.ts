import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UtilisateurComponent} from "./front/utilisateur/utilisateur.component";
import {AcceuilComponent} from "./front/acceuil/acceuil.component";
import {ConnectionComponent} from "./front/connection/connection.component";



const routes: Routes = [
  {path: "utilisateur/:id", component: UtilisateurComponent},
  {path: "utilisateur", component: UtilisateurComponent},
  // {path: "praticien", component: PraticienComponent},
  {path: "accueil", component: AcceuilComponent},
  {path: "connection", component: ConnectionComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"},
  //{path: "planning/:id", component: PlanningComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
