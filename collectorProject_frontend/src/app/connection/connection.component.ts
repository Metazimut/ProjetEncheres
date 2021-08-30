import { Component, OnInit } from '@angular/core';
import {UserDTO} from "../model/UserDTO";
import {ConnectionService} from "./connection.service";
import {SessionService} from "../session.service";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  userForm: UserDTO = new UserDTO();

  constructor(private connexionService: ConnectionService, private sessionService: SessionService) {

  }

  ngOnInit(): void {
  }

  connexion() {
    this.connexionService.authentification(this.userForm).subscribe(resp => {
      this.userForm = resp;
      this.sessionService.setUser(resp);
      console.log(resp);
    }, error => {
      alert("pas d'utilisateur trouvé")
    });
  }
}
