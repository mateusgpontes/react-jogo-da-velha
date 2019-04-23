import React from 'react';
import { Button } from './stylesComponents/stylesC';

class Square extends React.Component {
    render(){
        return (
            <Button onClick={() => { alert('click'); }}>
               {this.props.value}
            </Button>
        );
    }
}

export default Square;