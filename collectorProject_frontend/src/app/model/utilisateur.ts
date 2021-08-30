import {Compte} from "./compte";
import {Field} from "./field";
import {Commentaire} from "./commentaire";
import {Publication} from "./publication";
import {ParticipationEnchere} from "./participationEnchere";
import {Message} from "./message";

export class Utilisateur extends Compte {
  moyenPaiement: string;
  fields:Array<Field>;
  commentaires:Array<Commentaire>;
  publications:Array<Publication>;
  encheres:Array<ParticipationEnchere>;
  envoi:Array<Message>;
  reçoit:Array<Message>;


  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, dateCreation?: Date, identifiant?: string, mdp?: string, profilImg?: string, pseudo?: string, moyenPaiement?: string, fields?: Array<Field>, commentaires?: Array<Commentaire>, publications?: Array<Publication>, encheres?: Array<ParticipationEnchere>, envoi?: Array<Message>, reçoit?: Array<Message>) {
    super(id, version, nom, prenom, email, dateCreation, identifiant, mdp, profilImg);
    this.moyenPaiement = moyenPaiement;
    this.fields = fields;
    this.commentaires = commentaires;
    this.publications = publications;
    this.encheres = encheres;
    this.envoi = envoi;
    this.reçoit = reçoit;
  }
}
