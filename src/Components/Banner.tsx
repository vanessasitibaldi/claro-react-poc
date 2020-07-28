import React from 'react';
import '../assets/styles/Styles.css';
import bannerHome from '../assets/images/banner-controle-desk-10GB-1366x300px-v1.jpg'
import { Banner, Heading, Subtitle, Button } from 'mondrian-react';
const { Fragment } = React;


const BannerComponent: React.FC = () => {
    return (
        <Fragment>
            <Banner transparent right
                backgroundColorToken={'var(--theme-background-color--primary)'}
                backgroundImageSrc={'https://firebasestorage.googleapis.com/v0/b/site-mondrian.appspot.com/o/storybook_files%2FBanner-Example2.jpg?alt=media&token=51c16a61-3c32-41f4-8867-e1617b01d519'}>
                <Heading heading sm inverse>PRÉ COM O DOBRO<br />DA INTERNET MAIS RÁPIDA</Heading>
                <Subtitle sm inverse>PRA USAR COMO QUISER?</Subtitle>
                <img src="https://mondrian.claro.com.br/brands/app/partners/72px-default/whatsapp.svg" alt="whatsapp" />
                <Subtitle sm inverse>ILIMITADO</Subtitle>
                <Subtitle xs inverse>LIGAÇÕES ILIMITADAS PARA QUALQUER OPERADORA</Subtitle>
                <Button global>Contrate</Button>
            </Banner>

        </Fragment>
    );
}

export default BannerComponent;