export class Categorie {
  id:number;
  version:number;
  categorieNom:string;
  imgCat:string;


  constructor(id?: number, version?: number, categorieNom?: string, imgCat?: string) {
    this.id = id;
    this.version = version;
    this.categorieNom = categorieNom;
    this.imgCat = imgCat;
  }
}
