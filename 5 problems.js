/* Problem 1: Let’s play a mind game
1. Input a number 
2. multiply that number by 3, 
3. then add 10, 
4. then divide by 2,
5. then subtract 5,
6. and return the output.
*/
function mindGame(number) {
    // input validation
    if (typeof number !== 'number') {
        return "Please enter a number"
    }
    let multiplyBy3 = number * 3;
    let add10 = multiplyBy3 + 10;
    let divideBy2 = add10 / 2;
    let subtractBy5 = divideBy2 - 5
    const totalNumber = subtractBy5;
    return totalNumber;
}



/* Problem 2: Finding even or odd
1. input a string,
2. return Is the length of the string even and odd? 
*/
function evenOdd(text){
    // input validation
    if (typeof text !== 'string') {
        return "Please enter a string"
    }
    if (text.length % 2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}



/* Problem 3: Is Less or Greater than seven
1. Find the difference between the input value and 7.
2. If this difference is smaller than 7, return the subtraction.
3. Otherwise return double of the input.
*/
function isLGSeven(number) {
    // input validation
    if (typeof number !== 'number') {
        return "Please enter a number"
    }
    const subtractBy7 = number - 7;
    if (subtractBy7 < 7) {
        return subtractBy7
    }
    else{
        return number * 2
    }
}



/* Problem 4: Finding Bad data
1. Find out how many negative numbers are there in the array and 
2. return that number(negative number length).
*/
function findingBadData(array) {
    // input validation
    if (Array.isArray(array) == false) {
        return 'Please enter an Array'
    }
    let BadData = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            BadData.push(element)
        }
    }
    const numberOfBadData = BadData.length;
    return numberOfBadData;
}



/* Problem 5: Convert your gems into diamond
1. input 3 number,
2. Convert gems into diamond,
3. calculate total number of Diamond,
4. If the number of total diamond is over 1000 * 2, 
subtracting 2000 from the total diamond.
*/
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    // input validation
    if (typeof firstFriend !== 'number' || typeof secondFriend !== 'number' || typeof thirdFriend !== 'number') {
        return "Please enter a number"
    }

    let firstFriendGems = 21;
    let secondFriendGems = 32;
    let thirdFriendGems = 43;
    // Convert gems into diamond
    let firstFriendDiamond = firstFriendGems * firstFriend;
    let secondFriendDiamond = secondFriendGems * secondFriend;
    let thirdFriendDiamond = thirdFriendGems * thirdFriend;
    //total number of Diamond
    let totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    }
    return totalDiamond;
}


