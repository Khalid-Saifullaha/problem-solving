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
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello" ));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } )); 