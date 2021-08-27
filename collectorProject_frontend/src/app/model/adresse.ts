export class Adresse {
  id: number;
  version: number;
  rue: string;
  complement: string;
  codePostal: string;
  ville: string;
  pays: string;

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
