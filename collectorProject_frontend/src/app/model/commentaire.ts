import {Publication} from "./publication";
import {Utilisateur} from "./utilisateur";

export class Commentaire {
  constructor(id?:number, version?:number, message?: string, dateCreation?: Date,
              utilisateur?:Utilisateur, publication?:Publication) {}
}
