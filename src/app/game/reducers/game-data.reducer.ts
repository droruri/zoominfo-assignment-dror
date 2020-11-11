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

    case '[GameData] Decrement Skip':
      state.gameStatus.skips--;
      return state;

    case '[GameData] Decrement Life':
      state.gameStatus.livesRemaining--;
      return state;

    case '[GameData] Add Points':
      state.gameStatus.points += 10; // TODO: const
      return state;

    case '[GameData] set correctness for question':
      state.gameQuestions[action.questionIndex].isCorrectAnswer = action.correctness;
      return state;

    default:
      return state;
  }
}


