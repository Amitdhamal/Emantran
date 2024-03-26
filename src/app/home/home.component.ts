
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  top: any;
  left: any;
  isCodeScanned:boolean = false;
  isCardFliped:boolean = false;
  flip: string = 'inactive';
  flipped = false;

  constructor(private router:Router) { }
  codescanned(){
    if(!this.isCodeScanned){
      setTimeout(() => {
        alert('code scanned')
      }, 200);
    }
    this.isCodeScanned = true
  }

  flipIt(){
    this.flipped = ! this.flipped
  }

  redirectHome(){
    this.router.navigate([''])
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = ($event.pageY - 140) + "px";
    this.left = ($event.pageX - 80) + "px";
  }
 


}
