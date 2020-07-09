import React from 'react';
import '../assets/styles/Styles.css';
import { Button } from 'mondrian-react';
import { Link } from 'react-router-dom';

const { Fragment } = React;


interface ButtonElementProps {
    url: string;
}

const ButtonElement: React.FC<ButtonElementProps> = ({ url }) => {


    const onClickButton = () => {
        window.location.replace(url);
    }

    return (
        <Fragment>
            <Button
                primary
                md // set your ModifierColor of Button. Ex: primary (default), primaryInverse, secondary, secondaryInverse 
                onClick={onClickButton}
                config={
                    {
                        isDisabled: false,                    // if you want a disabled Button
                        data: 'data-attribute',                // data attribute to Button
                    }
                }>
                Eu quero!
        </Button>
        </Fragment>
    );
}

export default ButtonElement;