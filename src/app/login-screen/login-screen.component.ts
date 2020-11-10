import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  private validUsername = false;

  constructor() { }

  ngOnInit(): void {
  }


  isValidInput(): boolean {
    return !this.validUsername;
  }
}
