import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.css']
})
export class AlertBarComponent implements OnInit {
  @Input() answerSubmitted: boolean;
  @Input() isCorrectAnswer: boolean;
  @Input() timeLeft: number;
  @Input() endOfGame: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  getUsername(): Observable<string> {
    return this.gameService.getUsername();
  }

  getPoints(): Observable<number> {
    return this.gameService.getPoints();
  }

}
