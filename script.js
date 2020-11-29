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