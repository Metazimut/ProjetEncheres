import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../../model/utilisateur";
import {AppConfigService} from "../../app-config.service";


@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    // this.load();
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + id);
  }

  create(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/", utilisateur);
  }

  modify(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.put<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + utilisateur.id, utilisateur);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "utilisateur/" + id);
  }

  load(utilisateur:Utilisateur) {
    this.http.get<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + utilisateur.id).subscribe(response => {
    }, error => console.log(error));
  }
}
