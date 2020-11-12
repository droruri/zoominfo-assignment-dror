import {Component, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChildren} from '@angular/core';
import {GameService} from '../../questions/game.service';
import {Question} from '../../questions/question';
import { first } from 'rxjs/operators';
import {GameData} from '../game-data';
import {ActivatedRoute} from '@angular/router';
import {OptionCardComponent} from '../../option-card/option-card.component';
import {Observable, TimeInterval} from 'rxjs';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {
  @ViewChildren(OptionCardComponent) options: QueryList<OptionCardComponent>;

  private readonly SECONDS_PER_QUESTION = 20;
  timeLeft: number;
  interval;
  gameQuestions$: Question[];
  questionNumberCounter = 1;
  currentQuestion: Question;
  answerChosen = '';
  answerSubmitted = false;
  disableSkipButton = false;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.gameService.getQuestions().pipe(first()).subscribe(data => {
      this.gameQuestions$ = data;
      this.gameService.setStartGameData(new GameData(this.activatedRoute.snapshot.paramMap.get('username'), this.gameQuestions$));
      this.currentQuestion = this.gameQuestions$[0];
    });
    this.startTimer();
  }

  private startTimer(): void {
    this.timeLeft = this.SECONDS_PER_QUESTION;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.onTimerEnded();
      }
    }, 1000);
  }

  private onTimerEnded(): void {
    this.stopTimer();
    this.handleDecrementLife();
  }

  private stopTimer(): void {
    clearInterval(this.interval);
  }

  getCurrentQuestion(): string {
    return this.gameQuestions$[this.questionNumberCounter - 1].question;
  }

  getCurrentCorrectAnswer(): string {
    return this.gameQuestions$[this.questionNumberCounter - 1].correctAnswer;
  }

  onAnswerSubmitted(): void {
    this.stopTimer();
    if (this.getCurrentCorrectAnswer() === this.answerChosen) {
      this.gameService.increaseScore();
    } else {
      this.handleDecrementLife();
    }
    this.options.forEach(option => this.answerChosen === option.cardText ? option.submittedCard = true : option.submittedCard = false);
    this.answerSubmitted = true;
  }

  private handleDecrementLife(): void {
    this.gameService.decrementLife();
    this.getNumberOfLivesRemaining().pipe(first()).subscribe( lives => {
      if (lives === 0) {
        // TODO: handle end of game
      }
    });
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
        this.restartTimer();
      }
    });
  }

  getNumberOfSkipsRemaining(): Observable<number> {
    return this.gameService.getNumberOfSkipsRemaining();
  }

  getNumberOfLivesRemaining(): Observable<number> {
    return this.gameService.getNumberOfLivesRemaining();
  }

  getPoints(): Observable<number> {
    return this.gameService.getPoints();
  }

  onContinueClicked(): void {
    this.options.forEach(option => {
      option.submittedCard = false;
      option.selectedCard = false;
    });
    this.answerChosen = '';
    this.answerSubmitted = false;
    this.questionNumberCounter++;
    this.restartTimer();
    this.currentQuestion = this.gameQuestions$[this.questionNumberCounter - 1];
  }

  private restartTimer(): void {
    this.stopTimer();
    this.startTimer();
  }

  private handleEndOfGame(): void {

  }
}
