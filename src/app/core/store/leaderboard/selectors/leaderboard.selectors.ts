import {LeaderboardState} from '../../app.state';
import {createSelector} from '@ngrx/store';
import {LeaderboardRecord} from '../../../models/leaderboard-record';

export const getLeaderboardState = (state: LeaderboardState) => state.leaderboard.leaderboardRecords;

export const getBestRecordsState = (state: LeaderboardRecord[]) =>
  state.sort((a, b) => (a.points - b.points)).slice(0, 10); // TODO: CONST

export const getBestRecords = createSelector(getLeaderboardState, getBestRecordsState);
