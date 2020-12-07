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

function range(lowN, highN, step) {
    let rangeArr = [];
    
    if(lowN < highN) {
        while(lowN <= highN) {
            rangeArr.push(lowN);
            if(step > 0) {
                lowN = lowN + step;
            } else {
                lowN++;
            }
        }
    } else if (lowN > highN) {
        while(lowN >= highN) {
            rangeArr.push(lowN);
            if(step < 0) {
                lowN = lowN + step;
            } else {
                lowN--;
            }
        }
    }
    return rangeArr;
}

function reverseArray(array) {
    let newArr = [];

    for(let i = array.length; i > -1; i--) {
        newArr.push(array[i]);
    }

    return newArr;
}

function reverseArrayInPlace(array) {
    const length = array.length;
    for(let i = length; i > -1; i--) {
        array.push(array[i]);
    }
        
    // for(let j = 0; j<length + 1; j++) {
    //     array.shift();
    // }

    return array;
}

//COME BACK TO function aList(){...}

function deepEqual(val1, val2) {
    if(val1 === val2) {
        return true;
    }
    if(typeof val1 != 'object' || typeof val1 == 'null' 
    || typeof val2 != 'object' || typeof val2 == 'null') {
        return false;
    }

    let props1 = 0;
    let props2 = 0;

    for(var prop in val1) {
        props1++;
    }

    for(prop in val2) {
        props2++;
        
        if(!(prop in val2) || !deepEqual(val1[prop], val2[prop])) {
            return false;
        }
    }

    return props1 == props2;
}

let obj = {here: {is: "an"}, object: 2};    