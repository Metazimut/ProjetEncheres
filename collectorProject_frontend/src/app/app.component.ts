import {Component, ElementRef, Renderer2} from '@angular/core';
import {SessionService} from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private el: ElementRef, private renderer:Renderer2, private sessionService: SessionService){}

  ngAfterViewInit(){
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#E7E3D4');
  }

    isConnected(): boolean {
      return this.sessionService.user != null;
    }

    isType(type:string): boolean {
      return this.sessionService.type == type;
    }
}
