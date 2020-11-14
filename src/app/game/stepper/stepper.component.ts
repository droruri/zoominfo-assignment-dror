import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NUM_OF_QUESTIONS} from '../../core/constants/global';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit, OnChanges {
  @Input() questionNumber: number;
  grayDots: number[];
  blueDots: number[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawStepper();
  }

  private drawStepper(): void {
    this.blueDots = Array(this.questionNumber).fill(0);
    this.grayDots = Array(NUM_OF_QUESTIONS - this.questionNumber).fill(0);
  }
}
