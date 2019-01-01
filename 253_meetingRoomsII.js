// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
// find the minimum number of conference rooms required.

// Example 1:
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Example 2:
// Input: [[7,10],[2,4]]
// Output: 1

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}; 

// Strategy: Compare durations and find overlaps
// Time Complexity: O(nlogn)
// Space Complexity: O(n)
const minMeetingRooms = function(intervals) {
  if (!intervals) return 0;

  let sortByStart = intervals.slice().sort((a, b) => a.start - b.start); // make a shallow copy
  let sortByEnd = intervals.sort((a, b) => a.end - b.end);
  let rooms = 0;
  let end = 0; 

  // If a meeting's starting time is earlier than its previous meeting's ending time,
  // It means there is an overlap. We must add one room.
  for (let i = 0; i < intervals.length; i++) {
    if (sortByStart[i].start < sortByEnd[end].end) {
      rooms++;
    } else {
      end++; // Else, track the number of meetings that have ended 
    }
  }
  
  return rooms;
};

// Test cases: 
let meetingOne = new Interval(0, 30);
let meetingTwo = new Interval(5, 10);
let meetingThree = new Interval(15, 20);
let meetingFour = new Interval(7, 10);
let meetingFive = new Interval(2, 4);

let schedule = [meetingOne, meetingTwo, meetingThree]; 
console.log(minMeetingRooms(schedule)); // 2

let scheduleTwo = [meetingFour, meetingFive];
console.log(minMeetingRooms(scheduleTwo)); // 1

let scheduleThree = [meetingOne, meetingTwo, meetingThree, meetingFour, meetingFive]; 
console.log(minMeetingRooms(scheduleThree)); // 3