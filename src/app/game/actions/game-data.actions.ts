import {GameData} from '../game-data';
import {Action} from '@ngrx/store';
import {Question} from '../../questions/question';

export const LOAD_INITIAL_DATA = '[GameData] Load initial data';
export const DECREMENT_SKIP = '[GameData] Decrement Skip';
export const DECREMENT_LIFE = '[GameData] Decrement Life';
export const ADD_POINTS = '[GameData] Add Points';
export const SET_ANSWER = '[GameData] set correctness for question';

export class LoadInitialData implements Action {
  readonly type = LOAD_INITIAL_DATA;

  constructor(public payload: GameData) {}
}

export class DecrementSkip implements Action {
  readonly type = DECREMENT_SKIP;

  constructor() {}
}

export class DecrementLife implements Action {
  readonly type = DECREMENT_LIFE;

  constructor() {}
}

export class AddPoints implements Action {
  readonly type = ADD_POINTS;

  constructor() {}
}

export class SetAnswerToQuestion implements Action {
  readonly type = SET_ANSWER;

  constructor(public questionIndex: number, public correctness: boolean) {}
}

export type Actions = LoadInitialData | DecrementSkip | DecrementLife | AddPoints | SetAnswerToQuestion;





