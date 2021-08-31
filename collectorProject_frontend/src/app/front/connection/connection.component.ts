import { Component, OnInit } from '@angular/core';
import {UserDTO} from "../../model/UserDTO";
import {ConnectionService} from "./connection.service";
import {SessionService} from "../../session.service";
import {AppConfigService} from "../../app-config.service";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  userForm: UserDTO = new UserDTO();

  constructor(private connexionService: ConnectionService, private sessionService: SessionService, private appConfigService: AppConfigService) {

  }

  ngOnInit(): void {
  }

  connexion() {
    this.connexionService.authentification(this.userForm).subscribe(resp => {
      this.userForm = resp;
      this.sessionService.setUser(resp);
      window.location.replace("http://localhost:4200/accueil");
    }, error => {
      alert("pas d'utilisateur trouvé")
    });
  }
}
