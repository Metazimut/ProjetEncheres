import {Compte} from "./compte";
import {Utilisateur} from "./utilisateur";

export class Adresse {
  id: number;
  version: number;
  rue: string;
  complement: string;
  codePostal: string;
  ville: string;
  pays: string;
  utilisateur: Utilisateur;

  constructor(id?: number, version?: number, rue?: string, complement?: string, codePostal?: string, ville?: string,
              pays?: string) {
    this.id = id;
    this.version = version;
    this.rue = rue;
    this.complement = complement;
    this.codePostal = codePostal;
    this.ville = ville;
    this.pays = pays;
  }
}
