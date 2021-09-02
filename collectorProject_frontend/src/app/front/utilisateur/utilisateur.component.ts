import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../model/utilisateur";
import {UtilisateurHttpService} from "./utilisateurHttp.service";
import {Adresse} from "../../model/adresse";
import {AdresseHttpService} from "../adresse/adresseHttp.service";
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../session.service";
import {ConnectionComponent} from "../connection/connection.component";
import {ConnectionService} from "../connection/connection.service";
import {UserDTO} from "../../model/UserDTO";



@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utilisateurForm: Utilisateur = new Utilisateur();
  adresseForm: Array<Adresse> = new Array<Adresse>();
  adressesToDelete: Array<Adresse> = new Array<Adresse>();
  profilImgTmp : string =null;
  profilImgTmpURL : string =null;
  title = 'email-validation-tutorial';
  userForm:UserDTO=new UserDTO();
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private sessionService: SessionService, private route: ActivatedRoute, private utilisateurService: UtilisateurHttpService,
              private adresseService: AdresseHttpService,private http:HttpClient, private connexionService: ConnectionService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.utilisateurForm.id = params.id;
        this.loadUtilisateur();
      } else if(this.sessionService.user){
        this.utilisateurForm.id = this.sessionService.user.utilisateur.id;
        this.loadUtilisateur();
      }
    })
  }


  save() {
    if(this.verifyUtilisateurContent()){
      let today= new Date();
      this.utilisateurForm.dateCreation= new Date(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
      if (this.utilisateurForm.id) {
        this.utilisateurService.modify(this.utilisateurForm).subscribe(resp => {
          this.utilisateurForm = resp;
          this.saveAdresse()
        });
      } else {
        this.utilisateurService.findAllUtilisateurByEmail(this.utilisateurForm.email).subscribe(list => {
          if(list.length==0) {
            this.utilisateurService.create(this.utilisateurForm).subscribe(resp => {
              this.connexion();
              this.utilisateurForm = resp;
              this.saveAdresse()
            });
          }else{
            alert("cette adresse email est déjà utilisé");
          }
        });
      }

    }
  }

  saveAdresse(){
    for (let i in this.adressesToDelete) {
      this.adresseService.deleteById(this.adressesToDelete[i].id).subscribe();
    }
    this.adressesToDelete.splice(0,this.adressesToDelete.length);
    for (let i in this.adresseForm) {
      this.adresseForm[i].utilisateur = this.utilisateurForm;
      if (this.adresseForm[i].id) {
        this.adresseService.modify(this.adresseForm[i]).subscribe(resp => {
          this.adresseForm[i] = resp;
        });
      } else {
        this.adresseService.create(this.adresseForm[i]).subscribe(resp => {
          this.adresseForm[i] = resp;
        });
      }
    }
  }

  verifyUtilisateurContent(){
    let ok:boolean=true;
    if(!this.utilisateurForm.nom){ok=false}
    else if(!this.utilisateurForm.prenom){ok=false}
    else if(!this.utilisateurForm.email){ok=false}
    else if(!this.utilisateurForm.identifiant){ok=false}
    else if(!this.utilisateurForm.mdp){ok=false}
    if (!ok){
      alert("veuillez renseigner tous les champs");
    }
    return ok;
  }

  loadUtilisateur(){
    if (!isNaN(this.utilisateurForm.id)) {
      this.utilisateurService.findById(this.utilisateurForm.id).subscribe(resp => {
        this.utilisateurForm = resp;
        this.loadImg();
        this.adresseService.findAllByUtilisateurId(this.utilisateurForm.id).subscribe(adr => {
          this.adresseForm = adr;
        })

      })
    }
  }

  addAdresse(){
    let newAdresse: Adresse = new Adresse();
    this.adresseForm.push(newAdresse);
  }

  cancel() {
    this.utilisateurForm = null;
  }

  deleteAdresse(id: number){
    let deleteId = this.adresseForm.findIndex(adr=>adr.id==id);
    this.adressesToDelete.push(this.adresseForm[deleteId]);
    this.adresseForm.splice(deleteId,1);
  }


  loadImg(event?: any) {
    if(this.profilImgTmpURL) {
      if (this.profilImgTmpURL.slice(0,4)=="http"){
        this.utilisateurForm.profilImg =this.profilImgTmpURL;
      }
    }else {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.myForm.patchValue({
          fileSource: file
        });
      }
      this.upload();
      //this.spliceImg();
    }

  }

  upload(){
    const formData = new FormData();
    formData.append('profilImgTmp', this.myForm.get('fileSource')?.value);

    this.http.post('http://localhost:80/upload.php', formData)
      .subscribe(res => {
        this.spliceImg();

      } ,error => this.spliceImg());
  }

  spliceImg()
  {
    console.log(this.profilImgTmp);
      let tab = this.profilImgTmp.split("\\");

      this.utilisateurForm.profilImg = "../../../assets/profilImg/"+tab[tab.length - 1];

  }

  connexion() {
    this.userForm.login=this.utilisateurForm.email;
    this.userForm.password=this.utilisateurForm.mdp;
    this.connexionService.authentification(this.userForm).subscribe(resp => {
      this.userForm = resp;
      this.sessionService.setUser(resp);
      window.location.replace("http://localhost:4200/accueil");

    }, error => {
      alert("pas d'utilisateur trouvé")
    });
  }


}

