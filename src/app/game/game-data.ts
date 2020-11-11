import {Question} from '../questions/question';
import {GameStatus} from './game-status';

export class GameData {
  username: string;
  gameQuestions: Question[];
  gameStatus: GameStatus;
}
