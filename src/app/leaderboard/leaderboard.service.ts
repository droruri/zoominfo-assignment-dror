import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {LeaderboardState} from '../core/store/app.state';
import {LeaderboardRecord} from '../core/models/leaderboard-record';
import {AddRecord} from '../core/store/leaderboard/actions/leaderboard.actions';
import {Observable} from 'rxjs';
import * as fromLeaderboardData from '../core/store/leaderboard/selectors/leaderboard.selectors';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private store: Store<LeaderboardState>) { }

  public addRecord(record: LeaderboardRecord): void {
    this.store.dispatch(new AddRecord(record));
  }

  public getTopTenRecords(): Observable<LeaderboardRecord[]> {
    return this.store.select(fromLeaderboardData.getBestRecords);
  }
}
