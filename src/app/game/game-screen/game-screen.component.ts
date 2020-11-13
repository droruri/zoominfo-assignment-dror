import {Component, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChildren} from '@angular/core';
import {GameService} from '../game.service';
import {Question} from '../../core/models/question';
import { first } from 'rxjs/operators';
import {GameData} from '../../core/models/game-data';
import {ActivatedRoute} from '@angular/router';
import {OptionCardComponent} from '../option-card/option-card.component';
import {combineLatest, forkJoin, Observable, TimeInterval} from 'rxjs';
import {NUM_OF_QUESTIONS} from '../../core/constants/global';
import {LeaderboardService} from '../../leaderboard/leaderboard.service';
import {LeaderboardRecord} from '../../core/models/leaderboard-record';

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
  endOfGame = false;

  constructor(private gameService: GameService,
              private leaderboardService: LeaderboardService,
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
    this.disableSkipButton = true;
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
    this.answerSubmitted = true;
    if (this.isCorrectAnswer()) {
      this.gameService.increaseScore();
    } else {
      this.handleDecrementLife();
    }
    this.gameService.setAnswerToQuestion(this.questionNumberCounter - 1, this.getCurrentCorrectAnswer() === this.answerChosen);
    this.options.forEach(option => this.answerChosen === option.cardText ? option.submittedCard = true : option.submittedCard = false);
  }

  private handleDecrementLife(): void {
    this.gameService.decrementLife();
    this.getNumberOfLivesRemaining().pipe(first()).subscribe( lives => {
      if (lives === 0) {
        this.onEndOfGame();
      }
    });
  }

  isCorrectAnswer(): boolean {
    return this.getCurrentCorrectAnswer() === this.answerChosen;
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

        if (this.questionNumberCounter === NUM_OF_QUESTIONS) {
          this.onEndOfGame();
        } else {
          this.questionNumberCounter++;
          this.currentQuestion = this.gameQuestions$[this.questionNumberCounter - 1];
          this.restartTimer();
        }
      }
    });
  }

  onContinueClicked(): void {
    this.options.forEach(option => {
      option.submittedCard = false;
      option.selectedCard = false;
    });
    this.answerChosen = '';
    this.answerSubmitted = false;
    if (this.questionNumberCounter === NUM_OF_QUESTIONS) {
      this.onEndOfGame();
    } else {
      this.questionNumberCounter++;
      this.currentQuestion = this.gameQuestions$[this.questionNumberCounter - 1];
      this.restartTimer();
    }
  }

  private onEndOfGame(): void {
    this.endOfGame = true;
    combineLatest([this.getUsername(), this.getPoints()]).pipe(first()).subscribe(results => {
      this.leaderboardService.addRecord(new LeaderboardRecord(results[0], results[1], new Date().toDateString()));
    });
  }

  private restartTimer(): void {
    this.stopTimer();
    this.startTimer();
  }

  getNumberOfSkipsRemaining(): Observable<number> {
    return this.gameService.getNumberOfSkipsRemaining();
  }

  getNumberOfLivesRemaining(): Observable<number> {
    return this.gameService.getNumberOfLivesRemaining();
  }

  getUsername(): Observable<string> {
    return this.gameService.getUsername();
  }

  getPoints(): Observable<number> {
    return this.gameService.getPoints();
  }
}
