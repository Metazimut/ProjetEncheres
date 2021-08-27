import {Compte} from "./Compte";

export class Admin extends Compte {

  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, dateCreation?: Date,
              identifiant?: string, mdp?: string, profilImg?: string, pseudo?: string) {
    super(id, version, nom, prenom, email, dateCreation, identifiant, mdp, profilImg, pseudo);
  }
}

