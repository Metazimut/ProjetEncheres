import { Component, OnInit } from '@angular/core';
import {Admin} from "../../model/admin";
import {SessionService} from "../../session.service";
import {ActivatedRoute} from "@angular/router";
import {AdminHttpService} from "../admin/adminHttp.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminForm: Admin = new Admin();

  constructor(private sessionService: SessionService, private route: ActivatedRoute, private adminService: AdminHttpService,private http:HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.adminForm.id = this.sessionService.user.utilisateur.id;
      this.loadAdmin();
    })
  }
  loadAdmin(){
    if (!isNaN(this.adminForm.id)) {
      this.adminService.findById(this.adminForm.id).subscribe(resp => {
        this.adminForm = resp;
      })
    }
  }
  save() {
    if (this.adminForm.id) {
      this.adminService.modify(this.adminForm).subscribe(resp => {
        this.adminForm=resp;
      });
    } else {
      this.adminService.create(this.adminForm).subscribe(resp => {
        this.adminForm=resp;
      });
    }
  }
  cancel() {
    this.adminForm = null;
  }
}
