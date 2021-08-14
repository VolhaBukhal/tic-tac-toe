class TicTacToe {
    constructor() {
        this.step = 0;
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
    }
    
    getCurrentPlayerSymbol() {
        return (this.step % 2 == 0) ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        let symbol = this.getCurrentPlayerSymbol(); 
        
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = symbol;
            this.step++;
        } 

    }
     
    isFinished() {
        //check horizontals
        const x = 'x';
        const o = 'o';
        const isFilled = this.noMoreTurns();
        if(this.field[0][0] == x && this.field[0][1] == x && this.field[0][2] == x) {
            this.winner = x;
            return true;
        }
        else if(this.field[1][0] == x && this.field[1][1] == x && this.field[1][2] == x) {
            this.winner = x;
            return true;
        }
        else if(this.field[2][0] == x && this.field[2][1] == x && this.field[2][2] == x) {
            this.winner = x;
            return true;
        }

        //check verticals
        else if(this.field[0][0] == x && this.field[1][0] == x && this.field[2][0] == x) {
            this.winner = x;
            return true;
        }
        else if(this.field[0][1] == x && this.field[1][1] == x && this.field[2][1] == x) {
            this.winner = x;
            return true;
        }
        else if(this.field[0][2] == x && this.field[1][2] == x && this.field[2][2] == x) {
            this.winner = x;
            return true;
        }

        //check diagonal
        else if(this.field[0][0] == x && this.field[1][1] == x && this.field[2][2] == x) {
            this.winner = x;
            return true;
        }
        else if(this.field[0][2] == x && this.field[1][1] == x && this.field[2][0] == x) {
            this.winner = x;
            return true;
        }   
        
        //check horizontals
        else if(this.field[0][0] == o && this.field[0][1] == o && this.field[0][2] == o) {
            this.winner = o;
            return true;
        }
        if(this.field[1][0] == o && this.field[1][1] == o && this.field[1][2] == o) {
            this.winner = o;
            return true;
        }
        else if(this.field[2][0] == o && this.field[2][1] == o && this.field[2][2] == o) {
            this.winner = o;
            return true;
        }

        //check verticals
        else if(this.field[0][0] == o && this.field[1][0] == o && this.field[2][0] == o) {
            this.winner = o;
            return true;
        }
        else if(this.field[0][1] == o && this.field[1][1] == o && this.field[2][1] == o) {
            this.winner = o;
            return true;
        }
        else if(this.field[0][2] == o && this.field[1][2] == o && this.field[2][2] == o) {
            this.winner = o;
            return true;
        }

        //check diagonal
        else if(this.field[0][0] == o && this.field[1][1] == o && this.field[2][2] == o) {
            this.winner = o;
            return true;
        }
        else if(this.field[0][2] == o && this.field[1][1] == o && this.field[2][0] == o) {
            this.winner = o;
            return true;
        } 
                
        if (isFilled) {
            return true;
        } else {
            return false;
        }
        
    }
 
    getWinner() {
        const isFinished = this.isFinished();
        return isFinished ? this.winner : null;
    }

    noMoreTurns() {
        for(let el of this.field) {
            if( el.filter( item => !item).length > 0) {
                return false;
            }
        }
        return true;
    }
    
    isDraw() {
        const finished = this.isFinished();
        if ( !this.winner && finished) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
