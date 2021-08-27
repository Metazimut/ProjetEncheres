import {Utilisateur} from "./Utilisateur";
import {ParticipationEnchere} from "./participationEnchere";
import {Categorie} from "./categorie";
import {Commentaire} from "./commentaire";

export class Publication {
  constructor(id?:number, version?:number, nom?: string, description?: string, img?: string, prixDepart?:number,
              prixActuel?:number, dateEcheance?: Date, publicateur?:Utilisateur, categorie?:Categorie,
              encheres?:Array<ParticipationEnchere>, commentaires?:Array<Commentaire>) {}
}
