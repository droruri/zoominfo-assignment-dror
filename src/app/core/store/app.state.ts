import {GameData} from '../models/game-data';
import {LeaderboardRecord} from '../models/leaderboard-record';

export interface GameState {
  readonly gameData: GameData;
}

export interface LeaderboardState {
  readonly records: LeaderboardRecord[];
}
