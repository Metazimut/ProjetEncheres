import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FrontModule} from "./front/front.module";
import { MesEncheresComponent } from './front/mes-encheres/mes-encheres.component';


@NgModule({
  declarations: [
    AppComponent,
    MesEncheresComponent
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
