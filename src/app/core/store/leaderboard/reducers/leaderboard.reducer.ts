import {Leaderboard} from '../../../models/leaderboard';
import * as LeaderboardActions from '../actions/leaderboard.actions';

const initialState: Leaderboard = {
  leaderboardRecords: []
};

export function reducer(state: Leaderboard = initialState, action: LeaderboardActions.Actions): Leaderboard {
  switch (action.type) {
    case '[GameData] Add Record':
      return {...state, leaderboardRecords: [...state.leaderboardRecords, action.record]};

    default:
      return state;
  }
}
