import React from 'react';
import Board from './board';
import {Quadrados} from './stylesComponents/stylesC'

class Game extends React.Component {
    render() {
        return (
            <Quadrados>
                <Quadrados>
                    <Board />
                </Quadrados>
            </Quadrados>
        );
    }
}
    
    export default Game;