import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.css']
})
export class OptionCardComponent implements OnInit {

  @Input() cardText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
