import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {UserDTO} from "../../model/UserDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl + "authentification/";
  }

  authentification(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.chemin, user);
  }
}
