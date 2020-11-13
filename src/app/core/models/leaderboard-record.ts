export class LeaderboardRecord {
  username: string;
  points: number;
  date: string;

  constructor(username: string, points: number, date: string) {
    this.username = username;
    this.points = points;
    this.date = date;
  }
}
