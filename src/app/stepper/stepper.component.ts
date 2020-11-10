import {Component, Input, OnInit} from '@angular/core';
import {NUM_OF_QUESTIONS} from '../shared/global';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() questionNumber: number;
  grayDots: number[];
  blueDots: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.blueDots = Array(this.questionNumber).fill(0);
    this.grayDots = Array(NUM_OF_QUESTIONS - this.questionNumber).fill(0);
  }

}
