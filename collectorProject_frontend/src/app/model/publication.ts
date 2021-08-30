import {Utilisateur} from "./utilisateur";
import {ParticipationEnchere} from "./participationEnchere";
import {Categorie} from "./categorie";
import {Commentaire} from "./commentaire";

export class Publication {
  id:number;
  version:number;
  nom:string;
  description:string;
  img:string;
  prixDepart:number;
  prixActuel:number;
  dateEcheance:Date;
  publicateur:Utilisateur;
  categorie:Categorie;
  encheres:Array<ParticipationEnchere>;
  commentaires:Array<Commentaire>;


  constructor(id?: number, version?: number, nom?: string, description?: string, img?: string, prixDepart?: number, prixActuel?: number, dateEcheance?: Date, publicateur?: Utilisateur, categorie?: Categorie, encheres?: Array<ParticipationEnchere>, commentaires?: Array<Commentaire>) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.description = description;
    this.img = img;
    this.prixDepart = prixDepart;
    this.prixActuel = prixActuel;
    this.dateEcheance = dateEcheance;
    this.publicateur = publicateur;
    this.categorie = categorie;
    this.encheres = encheres;
    this.commentaires = commentaires;
  }
}
