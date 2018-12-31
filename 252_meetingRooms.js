// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
// determine if a person could attend all meetings.

// Example 1:
// Input: [[0,30],[5,10],[15,20]]
// Output: false

// Example 2:
// Input: [[7,10],[2,4]]
// Output: true

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals 
 * @return {boolean}
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
// Strategy: sort the objects in the input array by start time, then find overlaps
const canAttendMeetings = function(intervals) {
  if (!intervals) return false;

  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) return false;
  } 
  return true;
};

// Test cases: 
let meetingOne = new Interval(0, 30);
let meetingTwo = new Interval(15, 20);
let meetingThree = new Interval(5, 10);

let schedule = [meetingOne, meetingTwo, meetingThree];
// schedule =  [ Interval { start: 0, end: 30 },
//              Interval { start: 5, end: 10 },
//              Interval { start: 15, end: 20 } ]
console.log(canAttendMeetings(schedule)); // false

let scheduletwo = [meetingTwo, meetingThree];
// scheduletwo = [ Interval { start: 5, end: 10 },
//                 Interval { start: 15, end: 20 } ]
console.log(canAttendMeetings(scheduletwo)); // true

let scheduleThree = [];
console.log(canAttendMeetings(scheduleThree)); // true;

let scheduleFour = null;
console.log(canAttendMeetings(scheduleFour)); // false;