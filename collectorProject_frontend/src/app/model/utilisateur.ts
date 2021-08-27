import {Compte} from "./compte";

export class Utilisateur extends Compte {
  moyenPaiement: string;

  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, dateCreation?: Date,
              identifiant?: string, mdp?: string, profilImg?: string, pseudo?: string, moyenPaiement?: string) {
    super(id, version, nom, prenom, email, dateCreation, identifiant, mdp, profilImg, pseudo);
    this.moyenPaiement = moyenPaiement;
  }
}
