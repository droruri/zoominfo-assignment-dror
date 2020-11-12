import {createSelector} from '@ngrx/store';
import * as GameDataActions from '../actions/game-data.actions';
import {GameData} from '../../../models/game-data';
import {GameStatus} from '../../../models/game-status';
import {AppState} from '../../app.state';

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
      const updatedQuestion = state.gameQuestions[action.questionIndex];
      return {
        ...state,
        gameQuestions: {
          ...state.gameQuestions,
          [action.questionIndex]: {...updatedQuestion, isCorrectAnswer: action.correctness}
        }
      };

    default:
      return state;
  }
}

export const getGameDataState = (state: AppState) => state.gameData;

export const getSkipsState = (state: GameData) => state.gameStatus.skips;

export const getPointsState = (state: GameData) => state.gameStatus.points;

export const getLivesRemainingState = (state: GameData) => state.gameStatus.livesRemaining;

export const getSkips = createSelector(getGameDataState, getSkipsState);

export const getPoints = createSelector(getGameDataState, getPointsState);

export const getLivesRemaining = createSelector(getGameDataState, getLivesRemainingState);
