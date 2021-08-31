import {Publication} from "./publication";

export class Categorie {
  id:number;
  version:number;
  categorieNom:string;
  imgCat:string;
  publications:Array<Publication>;


  constructor(id?: number, version?: number, categorieNom?: string, imgCat?: string, publications?: Array<Publication>) {
    this.id = id;
    this.version = version;
    this.categorieNom = categorieNom;
    this.imgCat = imgCat;
    this.publications = publications;
  }
}
