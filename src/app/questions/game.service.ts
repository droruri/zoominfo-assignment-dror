import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Question} from '../core/models/question';
import {Store} from '@ngrx/store';
import {CORRECT_HEADER, INCORRECT_HEADER, QUESTION_HEADER} from '../core/constants/global';
import {GameData} from '../core/models/game-data';
import {AppState} from '../core/store/app.state';
import {AddPoints, DecrementLife, DecrementSkip, LoadInitialData, SetAnswerToQuestion} from '../core/store/game-data/actions/game-data.actions';
import * as fromGameData from '../core/store/game-data/reducers/game-data.reducer';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly url = 'https://opentdb.com/api.php?amount=10&type=multiple';

  constructor(private http: HttpClient,
              private store: Store<AppState>) {
  }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<any>(this.url).pipe(
      map(response => {
        return response.results.map(questionData => this.createQuestion(questionData));
      }),
      catchError(null)
    );
  }

  private createQuestion(questionData: any): Question {
    return new Question(questionData[QUESTION_HEADER], questionData[CORRECT_HEADER], questionData[INCORRECT_HEADER]);
  }

  public getGameData(): Observable<GameData> {
    return this.store.select('gameData');
  }

  public setStartGameData(game: GameData): void {
    this.store.dispatch(new LoadInitialData(game));
  }

  public getNumberOfSkipsRemaining(): Observable<number> {
    return this.store.select(fromGameData.getSkips);
  }

  public getNumberOfLivesRemaining(): Observable<number> {
    return this.store.select(fromGameData.getLivesRemaining);
  }

  public getPoints(): Observable<number> {
    return this.store.select(fromGameData.getPoints);
  }

  public decrementSkip(): void {
    this.store.dispatch(new DecrementSkip());
  }

  public decrementLife(): void {
    this.store.dispatch(new DecrementLife());
  }

  public increaseScore(): void {
    this.store.dispatch(new AddPoints());
  }

  public setAnswerToQuestion(index: number, correctness: boolean): void {
    this.store.dispatch(new SetAnswerToQuestion(index, correctness));
  }
}
