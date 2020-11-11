import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  userInput: string;

  constructor() { }

  ngOnInit(): void {
  }


  isValidInput(): boolean {
    return this.userInput && this.userInput.length > 0;
  }

  valueChange($event: string): void {
    this.userInput = $event;
  }
}
