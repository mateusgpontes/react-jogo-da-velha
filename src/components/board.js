import React from 'react';
import Square from './square';
import {CalculateWinner} from './logica/funções';
import { BoardWrapper, Quadrados, Text } from './stylesComponents/stylesC'  

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(),
            zIsNext: true,
        };
    }
    
    handleClick(i) {
        const squares = this.state.squares.slice();
        if(CalculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
    }

    render() {    
        const winner = CalculateWinner(this.state.squares);
        let status;
        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <BoardWrapper>
                <Text fontFamily = "Lato, sans-serif" padding = "40px">
                    {status}
                </Text>
                <Quadrados fontFamily = "Arial">
                    <Quadrados>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </Quadrados>
                    <Quadrados>
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </Quadrados>
                    <Quadrados>
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </Quadrados>
                </Quadrados>
            </BoardWrapper>
        );
    }
}

export default Board; 