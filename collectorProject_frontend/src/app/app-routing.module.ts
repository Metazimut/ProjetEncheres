import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



const routes: Routes = [
  // {path: "praticien", component: PraticienComponent},
  //{path: "", redirectTo: "accueil", pathMatch: "full"},
  //{path: "planning/:id", component: PlanningComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
