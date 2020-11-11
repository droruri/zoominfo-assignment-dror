import {Action, createReducer, on} from '@ngrx/store';
import * as GameDataActions from '../actions/game-data.actions';
import {GameData} from '../game-data';

export interface State {
  gameData: GameData;
}

const initialGameDataState: State = {
  gameData: new GameData('', null)
};

const gameDataReducer = createReducer(
  initialGameDataState,
  on(GameDataActions.loadInitialData, (state, {game}) => ({ gameData: game}))
  // on(GameDataActions.updatePoints, state => ({...state, gameData: state.gameData}))
);

export function reducer(state: State | undefined, action: Action): State {
  return gameDataReducer(state, action);
}


