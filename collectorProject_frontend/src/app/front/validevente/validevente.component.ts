import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Publication} from "../../model/publication";
import {VenteHttpService} from "../vente/vente-http.service";

@Component({
  selector: 'validevente',
  templateUrl: './validevente.component.html',
  styleUrls: ['./validevente.component.scss']
})
export class ValideventeComponent implements OnInit {
publi : Publication;



  constructor(private route : ActivatedRoute, private publiService : VenteHttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
this.publiService.findPublicationById(param.id).subscribe(param2 => {
  this.publi=param2
})
    })
  }

}
