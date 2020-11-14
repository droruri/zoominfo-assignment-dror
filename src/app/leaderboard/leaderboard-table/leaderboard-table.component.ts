import { Component, OnInit } from '@angular/core';
import {DATE_HEADER, POINTS_HEADER, RANKING_HEADER, USERNAME_HEADER} from '../../core/constants/global';
import {LeaderboardService} from '../leaderboard.service';
import {Observable} from 'rxjs';
import {LeaderboardRecord} from '../../core/models/leaderboard-record';

@Component({
  selector: 'app-leaderboard-table',
  templateUrl: './leaderboard-table.component.html',
  styleUrls: ['./leaderboard-table.component.css']
})
export class LeaderboardTableComponent implements OnInit {
  readonly headerColumns = [RANKING_HEADER, USERNAME_HEADER, POINTS_HEADER, DATE_HEADER];

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
  }

  getTopRecords(): Observable<LeaderboardRecord[]> {
    return this.leaderboardService.getTopTenRecords();
  }
}
