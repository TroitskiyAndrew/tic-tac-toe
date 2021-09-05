const { magenta } = require("colors");

class TicTacToe {
    constructor() {
        this._currentSymbol =  "x" ;
        this._field = [];
        for ( let i = 0; i<3; i++){
            this._field.push([]);
            for (let j = 0; j < 3; j++){
                this._field[i].push(null)
            }
        }
        this._turnsCounter = 0;
        
    }

    _isWin() {
        let field = this._field;
        for (let i = 0; i < field.length; i++){
            if (field[i][0] === null || field[i].filter((symb) => symb !== field[i][0] ).length > 0) {
                continue;
            }
            return field[i][0];
        }
        for (let i = 0; i < field[0].length; i++){
            if (field[0][i] === null || field.filter((arr) => arr[i] !== field[0][i]).length > 0) {
                continue;
            }
            return field[0][i];
        }
        if (field[0][0] && field.filter((arr,i) =>  arr[i] !== field[0][0] ).length == 0){
            return field[0][0];
        }
        if (field[0][field[0].length-1] && field.filter((arr,i) =>  arr[field[0].length-1 -i] !== field[0][field[0].length-1] ).length == 0){
            return field[0][field[0].length-1];
        }
    }

    _changeTurn() {
        this._currentSymbol === "x" ? this._currentSymbol = "o" : this._currentSymbol = "x";
    }

    getCurrentPlayerSymbol() {
        return this._currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this._field[rowIndex][columnIndex])
            return
        this._field[rowIndex][columnIndex] = this._currentSymbol;
        this._turnsCounter++
        if (!this._winner && this._isWin()) {
            this._winner = this.getCurrentPlayerSymbol()
        } 
        this._changeTurn()
        return this._currentSymbol;
    }

    isFinished() {
        return this._turnsCounter === 9 || this._isWin() != undefined
    }

    getWinner() {
        return this._winner ? this._winner : null;
    }

    noMoreTurns() {
        return this._turnsCounter === 9;
    }

    isDraw() {
        return this._turnsCounter === 9 && !this._winner;
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
