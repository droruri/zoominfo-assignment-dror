import {Leaderboard} from '../../../models/leaderboard';
import * as LeaderboardActions from '../actions/leaderboard.actions';
import {LeaderboardRecord} from '../../../models/leaderboard-record';

const initialState: Leaderboard = {
  leaderboardRecords: []
};

export function reducer(state: Leaderboard = initialState, action: LeaderboardActions.Actions): Leaderboard {
  switch (action.type) {
    case '[GameData] Add Record':
      return {...state, leaderboardRecords: [...state.leaderboardRecords, action.record]};

    default:
      return state;
  }
}
// TODO: is here?
// function binaryInsertion(records: LeaderboardRecord[], recordToInsert: LeaderboardRecord, lowerBound: number, upperBound: number)
//   : LeaderboardRecord[] {
//   if (upperBound - lowerBound === 1) {
//     if (recordToInsert < records[lowerBound]) {
//       records.splice(lowerBound, 0, recordToInsert);
//     }
//     else if (recordToInsert > records[upperBound]) {
//       records.splice(upperBound + 1, 0, recordToInsert);
//     }
//     else {
//       records.splice(upperBound, 0, recordToInsert);
//     }
//   } else {
//     const midPoint = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
//     recordToInsert < records[midPoint] ? binaryInsertion(records, recordToInsert, lowerBound, midPoint)
//       : binaryInsertion(records, recordToInsert, midPoint, upperBound);
//   }
//
//   return records;
// }
