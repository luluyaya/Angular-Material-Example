import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.sass']
})
export class Test1Component implements OnInit {

  constructor(private router:Router) { }
  
  test3Click(){
    this.router.navigate(['test3']); 
  }
  

  ngOnInit() {
  }

}
