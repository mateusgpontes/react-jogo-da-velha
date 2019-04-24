import Styles from 'styled-components';

export const BoardWrapper = Styles.div`
    justify-content: center;
    align-items: center;
    height: 100%;
    display: flex;
`

export const Text =  Styles.div`
    width: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: ${props => props.padding};
    font-family: ${props => props.fontFamily};
`

export const Quadrados = Styles.div`
    align-items: center;
    font-family: ${props => props.fontFamily};
`;

export const Button = Styles.button`
    vertical-align: bottom;
    height: 100px;
    width: 100px;
    border: ${props => props.border};
`;
