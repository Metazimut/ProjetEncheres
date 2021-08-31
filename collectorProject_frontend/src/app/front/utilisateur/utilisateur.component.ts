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
  profilImgTmp : string;
  title = 'email-validation-tutorial';
  userForm:UserDTO=new UserDTO();

  constructor(private sessionService: SessionService, private route: ActivatedRoute, private utilisateurService: UtilisateurHttpService,
              private adresseService: AdresseHttpService,private http:HttpClient, private connexionService: ConnectionService) {
    this.utilisateurForm.profilImg=null;
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

  // addImg(){
  //   var f = (<HTMLInputElement>document.getElementById('profilImg')).files[0];
  //   var r = new FileReader();
  //   r.onload=function(){
  //     console.log("r.result "+r.result)
  //   }
  //   r.readAsBinaryString(f);
  //
  // }

  save() {
    if(this.verifyUtilisateurContent()){
      if (this.utilisateurForm.id) {
        this.utilisateurService.modify(this.utilisateurForm).subscribe(resp => {
          this.utilisateurForm = resp;
          window.location.replace("http://localhost:4200/accueil");
        });
      } else {
        this.utilisateurService.findAllUtilisateurByEmail(this.utilisateurForm.email).subscribe(list => {
          console.log("list "+list.length);
          if(list.length==0) {
            this.utilisateurService.create(this.utilisateurForm).subscribe(resp => {
              this.connexion();
              this.utilisateurForm = resp;
            });
          }else{
            alert("cette adresse email est déjà utilisé");
          }
        });
      }
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
         this.spliceImg();
        this.adresseService.findAllByUtilisateurId(this.utilisateurForm.id).subscribe(adr => {
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


  loadImg(event : Event)
  {
    this.spliceImg();
  }

  spliceImg()
  {
    if(this.profilImgTmp) {
      let tab = this.profilImgTmp.split("\\");
      this.utilisateurForm.profilImg = tab[tab.length - 1];
    }
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

  // onFileChange(event : any) {
  //   if (event.target.files.length > 0) {
  //
  //     const file = event.target.files[0];
  //
  //     this.myForm.patchValue({
  //
  //       fileSource: file
  //
  //     });
  //
  //   }
  //
  //   const formData = new FormData();
  //
  //   formData.append('file', this.myForm.get('fileSource')?.value);
  //
  //
  //   this.http.post('http://localhost:8001/upload.php', formData)
  //
  //     .subscribe(res => {
  //
  //       console.log(res);
  //
  //       alert('Uploaded Successfully.');
  //
  //     })
  // }



}

