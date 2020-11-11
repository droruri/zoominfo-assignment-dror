import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionsService} from '../../questions/questions.service';
import {Question} from '../../questions/question';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  gameQuestions$: Question[];
  questionNumberCounter = 1;
  currentQuestion: Question;
  answerChosen: string;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().pipe(first()).subscribe(data => { // TODO: validate first is used good
      this.gameQuestions$ = data;
      console.log(this.gameQuestions$);
      this.currentQuestion = this.gameQuestions$[0];
    });
  }

  getCurrentQuestion(): string {
    return this.gameQuestions$[this.questionNumberCounter - 1].question;
    // return this.gameQuestions$[this.questionNumberCounter - 1].question.replace(/&quot;/g, '\"');
    // return this.gameQuestions$[this.questionNumberCounter - 1].question.replace(/&#039; /g, '\'');
  }

  getCurrentCorrectAnswer(): string {
    return this.gameQuestions$[this.questionNumberCounter - 1].correctAnswer;
  }

  onAnswerSubmitted(): void {
    if (this.getCurrentCorrectAnswer() === this.answerChosen) {

    }
    this.questionNumberCounter++;
    this.currentQuestion = this.gameQuestions$[this.questionNumberCounter - 1];
  }

  getChosenAnswer($event: string): void {
    this.answerChosen = $event;
  }
}
