import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../../model/utilisateur";
import {AppConfigService} from "../../app-config.service";


@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {

  utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Utilisateur> {
    return this.utilisateurs;
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + id);
  }

  create(utilisateur: Utilisateur) {
    this.http.post<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/", utilisateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(utilisateur: Utilisateur) {
    this.http.put<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + utilisateur.id, utilisateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "utilisateur/" + id);
  }

  load() {
    this.http.get<Array<Utilisateur>>(this.appConfigService.backEndUrl + "utilisateur/").subscribe(response => {
      this.utilisateurs = response;
    }, error => console.log(error));
  }
}
