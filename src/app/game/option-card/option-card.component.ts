import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.css']
})
export class OptionCardComponent implements OnInit {

  @Input() cardText: string;
  @Input() isCorrectAnswer: boolean;
  @Output() selectedCardEmitter = new EventEmitter<string>();
  isCardDisabled: boolean;
  submittedCard = false;
  selectedCard: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  emitSelection(): void {
    if (!this.isCardDisabled) {
      this.selectedCardEmitter.emit(this.cardText);
    }
  }

  isSubmittedAndCorrect(): boolean {
    return this.isCorrectAnswer && this.submittedCard;
  }

  isSubmittedAndFalse(): boolean {
    return !this.isCorrectAnswer && this.submittedCard;
  }
}
