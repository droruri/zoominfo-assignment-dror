import {GameData} from '../game-data';
import {Action} from '@ngrx/store';
import {Question} from '../../questions/question';

export const LOAD_INITIAL_DATA = '[GameData] Load initial data';
export const UPDATE_USERNAME = '[GameData] Update username';
export const LOAD_QUESTIONS = '[GameData] Load questions';

export class LoadInitialData implements Action {
  readonly type = LOAD_INITIAL_DATA;

  constructor(public payload: GameData) {}
}

export class UpdateUsername implements Action {
  readonly type = UPDATE_USERNAME;

  constructor(public payload: string) {}
}

export class LoadQuestions implements Action {
  readonly type = LOAD_QUESTIONS;

  constructor(public payload: Question[]) {}
}

export type Actions = LoadInitialData | UpdateUsername | LoadQuestions;
// export const loadInitialData = createAction('[GameData Component] Load initial data', props<{game: GameData}>());
// export const updatePoints = createAction('[GameData component] update points');





