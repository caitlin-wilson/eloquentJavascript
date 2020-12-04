/*** CHAPTER 2 - PROGRAM STRUCTURE ***/

function chessboard(n) {
    let string = '';

    for(let i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            if(string.length % 2 === 0) {
                string += '#';
            } else {
                string += ' ';
            }
        }
        string = string + '\n';
    }

    console.log(string);   
}

/*** CHAPTER 3 - FUNCTIONS ***/

function mathMin(n1, n2) {
    if(n1 < n2) {
        return n1;
    } else {
        return n2;
    }
}

function isEven(n) {
    if(n > 1) {
        return isEven(n - 2);
    } else if(n === 1) {
        return 'odd';
    } else if (n === 0) {
        return ' even';
    } else if (n < 0) {
        return isEven(n - n - n);
    }
}

function countsBs(word) {
    let counter = 0;

    for(let i = 0; i < word.length; i++) {
        if(word[i].toLowerCase() === 'b') {
            counter++;
        }
    }

    return counter;
}

function countLetter(word, letter) {
    let counter = 0;

    for(let i = 0; i < word.length; i++) {
        if(word[i].toLowerCase() === letter) {
            counter++;
        }
    }

    return counter;
}

/*** CHAPTER 3 - DATA STRUCTURES ***/

function range(lowN, highN) {
    let rangeArr = [];
    
    while(lowN <= highN) {
        rangeArr.push(lowN);
        lowN++;
    }

    return rangeArr;
}

