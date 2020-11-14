import {GameData} from '../models/game-data';
import {Leaderboard} from '../models/leaderboard';

export interface GameState {
  readonly gameData: GameData;
}

export interface LeaderboardState {
  readonly leaderboard: Leaderboard;
}
