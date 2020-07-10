import React from 'react';
import '../assets/styles/Styles.css';
import { Card, Heading, Subtitle } from 'mondrian-react';
import ButtonElement from '../Elements/ButtonElement';

const { Fragment } = React;


interface Cardprops {
    title: string;
    price: string;
    url: string;
}

const CardElement: React.FC<Cardprops> = ({ title, price, url }) => {

    const onClick = () => {
        window.location.replace(url);
    }

    return (
        <Fragment>
            <Card body>
                <Heading sm="true">{title}</Heading>
                <Subtitle sm="true">{price}</Subtitle>
                <ButtonElement onClickButton={onClick} />
            </Card>
        </Fragment>
    );
}

export default CardElement;