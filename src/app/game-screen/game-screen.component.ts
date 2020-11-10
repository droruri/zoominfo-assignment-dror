import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions/questions.service';
import {Question} from '../questions/question';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  gameQuestions: Question[];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe(data => {
      this.gameQuestions = data;
      console.log(this.gameQuestions);
    });
  }

}
