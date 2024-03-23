import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  top: any;
  left: any;
  expand = false;

  constructor() { }
  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = ($event.pageY - 10) + "px";
    this.left = ($event.pageX - 10) + "px";
  }


}
