function sendNotification(email) {
    let index = email.split('@');
    if(index.length !== 2 || index[0] === '' || index[1] === '' ){
        return 'Invalid Email';
    }
    let userName = index[0];
    let domainName = index[1];
    return userName + ' sent you an email from ' + domainName;

}

console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));