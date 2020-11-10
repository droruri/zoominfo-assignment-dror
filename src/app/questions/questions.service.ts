import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Question} from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly url = 'https://opentdb.com/api.php?amount=10&type=multiple';

  constructor(private http: HttpClient) {
  }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<any>(this.url).pipe(
      map(response => response.results),
      catchError(null)
    );
  }
}
