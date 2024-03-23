import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  top: any;
  left: any;

  constructor() { }
  codescanned(){
    setTimeout(() => {
      alert('code scanned')
    }, 200);
  }
  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = ($event.pageY - 140) + "px";
    this.left = ($event.pageX - 80) + "px";
  }
 


}
