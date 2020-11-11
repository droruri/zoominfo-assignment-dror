import {Question} from '../questions/question';
import {GameStatus} from './game-status';

export class GameData {
  username: string;
  gameQuestions: Question[];
  gameStatus: GameStatus;

  constructor(username: string, gameQuestions: Question[]) {
    this.username = username;
    this.gameQuestions = gameQuestions;
    this.gameStatus = new GameStatus();
  }
}
