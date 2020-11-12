import {Component, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChildren} from '@angular/core';
import {GameService} from '../../questions/game.service';
import {Question} from '../../questions/question';
import { first } from 'rxjs/operators';
import {GameData} from '../game-data';
import {ActivatedRoute} from '@angular/router';
import {OptionCardComponent} from '../../option-card/option-card.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {
  @ViewChildren(OptionCardComponent) options: QueryList<OptionCardComponent>;

  gameQuestions$: Question[];
  questionNumberCounter = 1;
  currentQuestion: Question;
  answerChosen: string;
  disableSkipButton = false;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.gameService.getQuestions().pipe(first()).subscribe(data => { // TODO: validate first is used good
      this.gameQuestions$ = data;
      this.gameService.setStartGameData(new GameData(this.activatedRoute.snapshot.paramMap.get('username'), this.gameQuestions$));
      this.currentQuestion = this.gameQuestions$[0];
    });
  }

  getCurrentQuestion(): string {
    return this.gameQuestions$[this.questionNumberCounter - 1].question;
  }

  getCurrentCorrectAnswer(): string {
    return this.gameQuestions$[this.questionNumberCounter - 1].correctAnswer;
  }

  onAnswerSubmitted(): void {
    if (this.getCurrentCorrectAnswer() === this.answerChosen) {
      this.gameService.increaseScore();
    }

    this.questionNumberCounter++;
    this.currentQuestion = this.gameQuestions$[this.questionNumberCounter - 1];
  }

  getChosenAnswer($event: string): void {
    this.answerChosen = $event;
    this.options.forEach(option => !(this.answerChosen === option.cardText) ? option.selectedCard = false : option.selectedCard = true);
  }

  onSkip(): void {
    this.getNumberOfSkipsRemaining().pipe(first()).subscribe(skips => {
      if (skips > 0) {
        if (skips === 1) {
          this.disableSkipButton = true;
        }
        this.gameService.decrementSkip();
        this.questionNumberCounter++;
      }
    });
  }

  getNumberOfSkipsRemaining(): Observable<number> {
    return this.gameService.getNumberOfSkipsRemaining();
  }
}
