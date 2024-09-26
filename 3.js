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

console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));

