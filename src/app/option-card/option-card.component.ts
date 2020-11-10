import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.css']
})
export class OptionCardComponent implements OnInit {

  @Input() cardText: string;
  @Output() selectedCardEmitter = new EventEmitter<string>();
  selectedCard: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selectedCard = true;
    this.selectedCardEmitter.emit(this.cardText);
  }
}
