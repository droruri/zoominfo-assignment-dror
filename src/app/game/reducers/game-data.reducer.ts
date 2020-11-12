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
  const updatedGameStatus = {...state.gameStatus};

  switch (action.type) {
    case GameDataActions.LOAD_INITIAL_DATA:
      return action.payload;

    case '[GameData] Decrement Skip':
      updatedGameStatus.skips--;
      return {...state, gameStatus: updatedGameStatus};

    case '[GameData] Decrement Life':
      updatedGameStatus.livesRemaining--;
      return {...state, gameStatus: updatedGameStatus};

    case '[GameData] Add Points':
      updatedGameStatus.points += 10; // TODO: const
      return {...state, gameStatus: updatedGameStatus};

    case '[GameData] set correctness for question':
      const updatedGameQuestions = {...state.gameQuestions};
      updatedGameQuestions[action.questionIndex].isCorrectAnswer = action.correctness;
      return {...state, gameQuestions: updatedGameQuestions};

    default:
      return state;
  }
}


