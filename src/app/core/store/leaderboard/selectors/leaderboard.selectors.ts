import {LeaderboardState} from '../../app.state';
import {createSelector} from '@ngrx/store';
import {LeaderboardRecord} from '../../../models/leaderboard-record';
import {ROWS_AT_LEADERBOARD} from '../../../constants/global';

export const getLeaderboardState = (state: LeaderboardState) => state.leaderboard.leaderboardRecords;

export const getBestRecordsState = (state: LeaderboardRecord[]) =>
  Object.assign([], state).sort((a, b) => (b.points - a.points)).slice(0, ROWS_AT_LEADERBOARD);

export const getBestRecords = createSelector(getLeaderboardState, getBestRecordsState);
