export class Adresse {
  id: number;
  version: number;
  rue: string;
  codePostal: string;
  ville: string;


  constructor(id?:number, version?:number, rue?: string, codePostal?: string, ville?: string) {
    this.id = id;
    this.version = version;
    this.rue = rue;
    this.codePostal = codePostal;
    this.ville = ville;
  }
}
