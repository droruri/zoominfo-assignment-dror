import {Action} from '@ngrx/store';
import {LeaderboardRecord} from '../../../models/leaderboard-record';

export const ADD_RECORD = '[GameData] Add Record';

export class AddRecord implements Action {
  readonly type = ADD_RECORD;

  constructor(public record: LeaderboardRecord) {
  }
}

export type Actions = AddRecord;
