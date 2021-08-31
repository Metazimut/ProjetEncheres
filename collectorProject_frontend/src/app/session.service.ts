import { Injectable } from '@angular/core';
import {UserDTO} from "./model/UserDTO";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user:UserDTO;

  type:string;

  constructor() {
    let jsonUSer: string = sessionStorage.getItem('user');
    if(jsonUSer) {
      this.user = JSON.parse(jsonUSer);
      this.type = this.user.type;
    }
  }

  setUser(user: UserDTO) {
    this.user = user;
    this.type = user.type;
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
