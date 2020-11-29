function chessboard(n) {
    let string = ' ';

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            while(string.length < n) {
                if(string.length % 2 === 1) {
                    string += '#';
                } else {
                    string += ' ';
                }
            }
        }
    }

    console.log(string, string.length);   
}