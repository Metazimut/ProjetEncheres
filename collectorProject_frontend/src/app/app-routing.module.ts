import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ConnectionComponent} from "./connection/connection.component";



const routes: Routes = [
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
