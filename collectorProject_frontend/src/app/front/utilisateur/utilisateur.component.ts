import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../model/utilisateur";
import {UtilisateurHttpService} from "./utilisateurHttp.service";
import {Adresse} from "../../model/adresse";
import {AdresseHttpService} from "../adresse/adresseHttp.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utilisateurForm: Utilisateur = new Utilisateur();
  adresseForm: Array<Adresse> = new Array<Adresse>();

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurHttpService,private adresseService: AdresseHttpService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.utilisateurForm.id = params.id;
      this.loadUtilisateur();
    })
  }


  save() {
    if (this.utilisateurForm.id) {
      this.utilisateurService.modify(this.utilisateurForm);
    } else {
      this.utilisateurService.create(this.utilisateurForm);
    }
    for(const adr of this.adresseForm){
      adr.compte=this.utilisateurForm;
      if (adr.id) {
        console.log("adr.version "+adr.version);
        this.adresseService.modify(adr);
      } else {
        this.adresseService.create(adr);
      }
    }
    this.loadUtilisateur();
  }

  loadUtilisateur(){
    if (!isNaN(this.utilisateurForm.id)) {
      this.utilisateurService.findById(this.utilisateurForm.id).subscribe(resp => {
        this.utilisateurForm = resp;
        this.adresseService.findAllByCompteId(this.utilisateurForm.id).subscribe(adr => {
          this.adresseForm = adr;
        })
      })
    }
  }

  cancel() {
    this.utilisateurForm = null;
  }

  delete(id: number){
    this.utilisateurService.deleteById(id);
  }

}
