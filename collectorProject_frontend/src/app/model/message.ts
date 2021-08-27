
export class Message {

  id:number;
  version:number;
  messageTxt:string;
  dateCreation:Date;
  emetteur:Utilisateur;
  recepteur:Utilisateur;


  constructor(id?: number, version?: number, messageTxt?: string, dateCreation?: Date, emetteur?: Utilisateur, recepteur?: Utilisateur) {
    this.id = id;
    this.version = version;
    this.messageTxt = messageTxt;
    this.dateCreation = dateCreation;
    this.emetteur = emetteur;
    this.recepteur = recepteur;
  }


}
