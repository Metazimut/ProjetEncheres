import {Publication} from "./publication";
import {Commentaire} from "./commentaire";
import {ParticipationEnchere} from "./participationEnchere";

export class AchatDTO {
  publication: Publication;
  commentaires: Array<Commentaire>;
  encheres: Array<ParticipationEnchere>;


  constructor(publication?: Publication, commentaires?: Array<Commentaire>, encheres?: Array<ParticipationEnchere>) {
    this.publication = publication;
    this.commentaires = commentaires;
    this.encheres = encheres;
  }
}
