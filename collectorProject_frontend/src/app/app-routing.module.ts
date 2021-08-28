import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AchatComponent} from "./front/achat/achat.component";



const routes: Routes = [
  // {path: "praticien", component: PraticienComponent},
  //{path: "", redirectTo: "accueil", pathMatch: "full"},
  //{path: "planning/:id", component: PlanningComponent},
  {path: "achat", component: AchatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
