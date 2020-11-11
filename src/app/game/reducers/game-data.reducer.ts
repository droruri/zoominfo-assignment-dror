import {Action, createReducer, on} from '@ngrx/store';
import * as GameDataActions from '../actions/game-data.actions';
import {GameData} from '../game-data';
import {GameStatus} from '../game-status';

const initialState: GameData = {
  username: '',
  gameQuestions: [],
  gameStatus: new GameStatus()
};

export function reducer(state: GameData = initialState, action: GameDataActions.Actions): GameData {
  switch (action.type) {
    case GameDataActions.LOAD_INITIAL_DATA:
      return action.payload;

    case '[GameData] Update username':
      state.username = action.payload;
      return state;

    case '[GameData] Load questions':
      state.gameQuestions = action.payload;
      return state;

    default:
      return state;
  }
}


