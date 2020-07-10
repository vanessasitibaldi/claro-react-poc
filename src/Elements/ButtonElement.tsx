import React from 'react';
import '../assets/styles/Styles.css';
import { Button } from 'mondrian-react';

const { Fragment } = React;


interface ButtonElementProps {
    onClickButton: () => void;
}

const ButtonElement: React.FC<ButtonElementProps> = ({ onClickButton }) => {

    return (
        <Fragment>
            <Button
                primary
                md
                onClick={onClickButton}
            >
                Eu quero!
        </Button>
        </Fragment>
    );
}

export default ButtonElement;