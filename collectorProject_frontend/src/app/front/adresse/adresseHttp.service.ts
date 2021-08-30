import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Adresse} from "../../model/adresse";
import {AppConfigService} from "../../app-config.service";
import {Compte} from "../../model/compte";


@Injectable({
  providedIn: 'root'
})
export class AdresseHttpService {

  adresses: Array<Adresse> = new Array<Adresse>();
  compte: Compte;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Adresse> {
    return this.adresses;
  }

  findById(id: number): Observable<Adresse> {
    return this.http.get<Adresse>(this.appConfigService.backEndUrl + "adresse/" + id);
  }

  findAllByUtilisateurId(id: number): Observable<Array<Adresse>> {
    return this.http.get<Array<Adresse>>(this.appConfigService.backEndUrl + "utilisateur/" + id+"/adresses/");
  }

  create(adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(this.appConfigService.backEndUrl + "adresse/", adresse);
  }

  modify(adresse: Adresse): Observable<Adresse> {
    return this.http.put<Adresse>(this.appConfigService.backEndUrl + "adresse/" + adresse.id, adresse);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "adresse/" + id);
  }

  load() {
    this.http.get<Array<Adresse>>(this.appConfigService.backEndUrl + "adresse/").subscribe(response => {
      this.adresses = response;
    }, error => console.log(error));
  }
}
