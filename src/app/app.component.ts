import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hw1';

  constructor(private router:Router) { }

  test1Click(){
    this.router.navigate(['test1']); 
  }
  test2Click(){
    this.router.navigate(['test2']); 
  }
  test3Click(){
    this.router.navigate(['test3']); 
  }

}


