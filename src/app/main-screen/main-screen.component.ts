import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

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
