import * as GameDataActions from '../actions/game-data.actions';
import {GameData} from '../../../models/game-data';
import {GameStatus} from '../../../models/game-status';
import {POINTS_EARNED_PER_QUESTION} from '../../../constants/global';

const initialState: GameData = {
  username: '',
  gameQuestions: [],
  gameStatus: new GameStatus()
};

export function reducer(state: GameData = initialState, action: GameDataActions.Actions): GameData {
  const updatedGameStatus = {...state.gameStatus};

  //in each case use the constant you created, like GameDataActions.LOAD_INITIAL_DATA
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
      updatedGameStatus.points += POINTS_EARNED_PER_QUESTION;
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
