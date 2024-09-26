function waitingTime(interviewTimes, serialNumber) {
    if ( typeof serialNumber !== 'number'|| !Array.isArray(interviewTimes)) {
        return "Invalid Input";
    }
    let completedInterviews = interviewTimes.length;
    let remainingPeople = serialNumber - 1 - completedInterviews;
    if (remainingPeople <= 0) {
        return 0;
    }
    let totalTime = interviewTimes.reduce((acc, time) => acc + time, 0);
    let averageTime = Math.round(totalTime / completedInterviews);
    let waitingTime = remainingPeople * averageTime;
    return waitingTime;
}
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));