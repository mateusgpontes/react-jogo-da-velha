import Styles from 'styled-components';

export const BoardWrapper = Styles.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Quadrados = Styles.div`
    font-family: Arial;
    align-items: center;
`;

export const Button = Styles.button`
    border: 3px solid black;
    height: 100px;
    width: 100px;
    vertical-align: bottom;
`;