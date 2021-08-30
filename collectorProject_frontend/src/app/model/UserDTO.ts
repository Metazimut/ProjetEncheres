import {Compte} from "./compte";

export class UserDTO

{
  constructor(public login?:string,public password?:string,public utilisateur?:Compte, public type?:string) {
  }
}
