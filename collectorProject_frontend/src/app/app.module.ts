import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AccueilComponent } from './front/accueil/accueil.component';
import { ConnectionComponent } from './front/connection/connection.component';
import {FrontModule} from "./front/front.module";
import { CategorieComponent } from './categorie/categorie.component';
import { AdminComponent } from './front/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FrontModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
