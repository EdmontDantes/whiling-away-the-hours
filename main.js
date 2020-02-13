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