export class Compte {
  id:number;
  version:number;
  nom:string;
  prenom:string;
  email:string;
  dateCreation:Date;
  identifiant:string;
  mdp:string;
  profilImg:string;



  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, dateCreation?: Date,
              identifiant?: string, mdp?: string, profilImg?: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.dateCreation = dateCreation;
    this.identifiant = identifiant;
    this.mdp = mdp;
    this.profilImg = profilImg;
  }
}
