import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Emantran';
  year = new Date().getFullYear()
  redirectHome(){
    console.log(this.year)
  }
}
