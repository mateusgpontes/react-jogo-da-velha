import React from 'react';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history:[{
                squares: Array(9).fill(null),
            }],
            xIsNext:true,
        }
    }
    render() {
        return (
            <Board />
        );
    }
}
    
    export default Game;