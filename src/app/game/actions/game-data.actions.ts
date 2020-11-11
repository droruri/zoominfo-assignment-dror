import {createAction, props} from '@ngrx/store';
import {Question} from '../../questions/question';
import {GameData} from '../game-data';

export const loadInitialData = createAction('[GameData Component] Load initial data', props<{game: GameData}>());
// export const updatePoints = createAction('[GameData component] update points');





