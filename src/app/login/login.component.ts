import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  //Generally validation will take place here. But here it is directly being redirected to home 
  login(){
    document.location.href='http://localhost:4200/home';
  }
  ngOnInit() {
  }

}
