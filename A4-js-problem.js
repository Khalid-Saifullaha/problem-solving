function calculateTax(income, expenses) {
    if(income <0 || expenses <0){
        return 'Invalid Input';
    }
    let savings =0;
     savings = income - expenses;
     let tex = savings * 0.2;
     return tex;
}

// 2

function sendNotification(email) {
    let index = email.split('@');
    if(index.length !== 2 || index[0] === '' || index[1] === '' ){
        return 'Invalid Email';
    }
    let userName = index[0];
    let domainName = index[1];
    return userName + ' sent you an email from ' + domainName;

}


// 3

function checkDigitsInName(name) {
    if (typeof name !== 'string'){
        return 'Invalid Input'
    }
    for (let letter of name){
        if (!isNaN(letter)){
            return true;
        }
    }
    return false;
}

// 4

function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || obj === null){
        return "Invalid Input"
    }
    const {name,testScore,schoolGrade,isFFamily } = obj;

    let finalScore = testScore + schoolGrade;
    if(isFFamily){
        finalScore += 20;
    }
    return finalScore >=80; 
}

// 5

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
