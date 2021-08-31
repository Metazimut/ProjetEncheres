import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Observable} from "rxjs";
import {AchatDTO} from "../../model/achatDTO";
import {Publication} from "../../model/publication";
import {Commentaire} from "../../model/commentaire";
import {ParticipationEnchere} from "../../model/participationEnchere";

@Injectable({
  providedIn: 'root'
})
export class AchatHttpService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    // this.load();
  }

  findById(id: number): Observable<AchatDTO> {
    return this.http.get<AchatDTO>(this.appConfigService.backEndUrl + "achat/" + id);
  }

  findAllByCategorie(categorieID: number): Observable<Array<Publication>> {
    return this.http.get<Array<Publication>>(this.appConfigService.backEndUrl + "achat/categorie/"+ categorieID);
  }

  createComm(id: number, commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.appConfigService.backEndUrl + "achat/" + id +"/commentaire", commentaire);
  }

  createEnch(id: number, enchere: ParticipationEnchere): Observable<ParticipationEnchere> {
    return this.http.post<ParticipationEnchere>(this.appConfigService.backEndUrl + "achat/" + id +"/enchere", enchere);
  }


  // modify(utilisateur: Utilisateur): Observable<Utilisateur>{
  //   return this.http.put<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + utilisateur.id, utilisateur);
  // }
  //
  // deleteById(id: number): Observable<void> {
  //   return this.http.delete<void>(this.appConfigService.backEndUrl + "utilisateur/" + id);
  // }
  //
  // load(utilisateur:Utilisateur) {
  //   this.http.get<Utilisateur>(this.appConfigService.backEndUrl + "utilisateur/" + utilisateur.id).subscribe(response => {
  //   }, error => console.log(error));
  // }
}
