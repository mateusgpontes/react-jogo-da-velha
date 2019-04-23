import React from 'react';
import Square from './square';
import { Quadrados } from './stylesComponents/stylesC'

class Board extends React.Component {
    renderSquare(i){
        return <Square value={i} />;
    }

    render() {
        return (
            <Quadrados>
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
        );
    }
}

export default Board; 