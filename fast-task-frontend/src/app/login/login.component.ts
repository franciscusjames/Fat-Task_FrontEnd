import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {
  }

  public loginUser(): void {

  }

  public forgotPassword(): void {

  }

}
