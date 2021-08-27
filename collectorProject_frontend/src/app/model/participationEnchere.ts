
export class ParticipationEnchere {

  id:number;
  version:number;
  prixProposition:number;
  placeNb:number;
  utilisateur: Utilisateur;
  publication: Publication;


  constructor(id?: number, version?: number, prixProposition?: number, placeNb?: number, utilisateur?: Utilisateur, publication?: Publication) {
    this.id = id;
    this.version = version;
    this.prixProposition = prixProposition;
    this.placeNb = placeNb;
    this.utilisateur = utilisateur;
    this.publication = publication;
  }
}
