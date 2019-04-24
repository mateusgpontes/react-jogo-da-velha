import React from 'react';
import { Button } from './stylesComponents/stylesC';

 function Square(props) {
    return (
        <Button 
            onClick={props.onClick}
        >
           {props.value}
        </Button>
    );
}

export default Square;