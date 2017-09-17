class TicTacToe {
    constructor() {
        this.field = [];
        for (var i = 0; i < 3; i++){
            this.field[i] = [];
            for (var j = 0; j < 3; j++){
                this.field [i][j] = null;

}}

        this.currentPlayerSymbol = 'x';
        this.flag = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] == null){
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.changeSymbol();
        }


    }

    isFinished() {
            if(this.getWinner() !== null || this.noMoreTurns() === true){
                return true;
            }
            else{
                return false;
            }

    }

    getWinner() {
        var n = 0;
         for (var i = 0; i < 3; i++){
            if(this.field[i][0] == this.field[i][1] && 
                this.field[i][0] == this.field[i][2] &&
                this.field[i][0] != null ){
                this.winner = this.field[i][0];
            }
            if(this.field[0][i] == this.field[1][i] && 
                this.field[0][i] == this.field[2][i] &&
                this.field[0][i] != null ){
                this.winner = this.field[0][i];
            }
            if(this.field[0][0] == this.field[1][1] && 
                this.field[0][0] == this.field[2][2] &&
                this.field[0][0] != null ){
                this.winner = this.field[0][0];
            }
            if(this.field[2][0] == this.field[0][2] && 
                this.field[2][0] == this.field[1][1] &&
                this.field[2][0] != null ){
                this.winner = this.field[2][0];
            }
         }
         return this.winner;
    }

    noMoreTurns() {
        this.flag = 0;
              for (var i = 0; i < 3; i++){
                    for (var j = 0; j < 3; j++){
                        if(this.field [i][j] != null){
                        this.flag++;
                    }


}}
    if(this.flag == 9){
        return true;
    }
    else{
        return false;
    }

    }

    isDraw() {
        if(this.isFinished() === false || this.getWinner() !== null ){
            return false;
        }
        else if( this.isFinished() === true || this.getWinner() === null){
            return true;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];

    }

    changeSymbol(){
        if(this.currentPlayerSymbol == 'x'){
            this.currentPlayerSymbol = 'o';
        }
        else if(this.currentPlayerSymbol == 'o'){
            this.currentPlayerSymbol = 'x';
        }
    }
}

module.exports = TicTacToe;
