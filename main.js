function makeSeparatorChallengeNum (num) {
    console.log('######### Challenge ' + num + ' #########')
}

makeSeparatorChallengeNum(1)
function fromOneToFive() {
let numChallenge1 = 1;
while (numChallenge1 <= 5) {
    console.log(numChallenge1);
    numChallenge1 = numChallenge1 + 1;
}
}
fromOneToFive();


makeSeparatorChallengeNum(2);

function printLoop(num) {
    let numChallenge2 = 1;
    while (numChallenge2 <= num) {
        console.log(numChallenge2);
        numChallenge2 = numChallenge2 + 1;
    }
}
printLoop(6);

makeSeparatorChallengeNum(3);

function fromBeginningNumToEndNum (beginningNum, endNum) {
    while (beginningNum <= endNum) {
        console.log(beginningNum);
        beginningNum = beginningNum + 1;

    }
}

fromBeginningNumToEndNum(5, 10);


makeSeparatorChallengeNum(4);

function printsOddAndEvenFromOneToParam (endNumParam) {
    let beginNum = 1;
    while (beginNum <= endNumParam){
        if (beginNum % 2 === 1) {
            console.log(beginNum + ' Odd');
            beginNum = beginNum + 1;
        }else if (beginNum % 2 === 0) {
            console.log(beginNum + ' Even');
            beginNum = beginNum + 1;
        }
    }
}

printsOddAndEvenFromOneToParam(5);

makeSeparatorChallengeNum(5);


function printsEvenFromOneToParam (endNumParam) {
    let beginNum = 1;
    while (beginNum <= endNumParam){
        if (beginNum % 2 === 1) {
            beginNum = beginNum + 1;
        }else if (beginNum % 2 === 0) {
            console.log(beginNum);
            beginNum = beginNum + 1;
        }
    }
}

printsEvenFromOneToParam(11);

makeSeparatorChallengeNum(6);

function printsFromOneToTenDescendingOrder () {
    let startNum = 10;
    while (startNum >= 1){
        console.log(startNum);
        startNum = startNum - 1;

    }
}

printsFromOneToTenDescendingOrder()

makeSeparatorChallengeNum(7);

function printsFromOneToTenDescendingOrderPlusStrBlastOff () {
    let startNum = 10;
    while (startNum >= 1){
        console.log(startNum);
        startNum = startNum - 1;
    }
    console.log('Blast off!')
}

printsFromOneToTenDescendingOrderPlusStrBlastOff();

makeSeparatorChallengeNum(8);

function printsFromNumParamIntoDescendingOneByThreeIncrements (num) {
    while (num >= 1){
        console.log(num);
        num = num - 3;
    }
}

printsFromNumParamIntoDescendingOneByThreeIncrements(20);

makeSeparatorChallengeNum(9);

function printsHelloSevenTimes () {
    let startNum = 1;
    while (startNum <= 7){
    console.log(startNum + '. Hello!');
    startNum = startNum + 1;
    }
}

printsHelloSevenTimes();

makeSeparatorChallengeNum(10);

function printsHelloSevenTimesPlusStrParam (str) {
    let startNum = 1;
    while (startNum <= 7) {
        console.log(startNum + ' ' + str);
        startNum = startNum + 1;
    }
}

printsHelloSevenTimesPlusStrParam('This is an Epic Count to Seven');

makeSeparatorChallengeNum(11);

function printsStrThatNumberOfTimes (str, num) {
    let startNum = 1;
    while (startNum <= num) {
        console.log(str);
        startNum = startNum + 1;
    }
}

printsStrThatNumberOfTimes('Good-bye...', 4);

makeSeparatorChallengeNum(12);

function printsStrCharsIndividually (str) {
    let strAtZero = 0;
    while (strAtZero < str.length) {
        console.log(str.charAt(strAtZero));
        strAtZero = strAtZero + 1;
    }
}

printsStrCharsIndividually('think');

makeSeparatorChallengeNum(13);

function printsStrCharsEveryOtherChar (str) {
    let strAtZero = 0;
    while (strAtZero < str.length) {
        if (strAtZero % 2 === 1){
        console.log(str.charAt(strAtZero));
        strAtZero = strAtZero + 1;
        }else if (strAtZero % 2 === 0) {
            strAtZero = strAtZero + 1;
        }
    }
}
printsStrCharsEveryOtherChar('Nobody');

makeSeparatorChallengeNum(14);

function printsStrCharsBackwards (str) {
    let CharsLength = str.length;
    while (CharsLength --) {
    console.log(str.charAt(CharsLength));
    }
}

printsStrCharsBackwards('think');

makeSeparatorChallengeNum (15);

function printsFizzBuzz (num) {
    let startNum = 1;
    while (startNum <= num){
        if ((num % 3 === 0 && num % 5 === 0)){
            console.log('FizzBuzz');
            break;
        } else if (num % 3 === 0) {
            console.log('Fizz');
            break;
        } else if (num % 5 === 0) {
            console.log ('Buzz');
            break;
        } else {
            console.log(startNum);
            startNum = startNum + 1;
        }
    }
}

printsFizzBuzz (5);
printsFizzBuzz (30);
printsFizzBuzz (6);
printsFizzBuzz (5);
printsFizzBuzz (8);

makeSeparatorChallengeNum(16);

function fibonacci (num) {
    let startSequence = 1;
    let intermediateSequence = 0;
    let temporaryVar;
    while (num --) {
        temporaryVar = startSequence; 
        startSequence = startSequence + intermediateSequence;
        intermediateSequence = temporaryVar;
        console.log(startSequence);

    }
}

fibonacci (8);