import React from 'react';
import '../assets/styles/Styles.css';
import bannerHome from '../assets/images/banner-controle-desk-10GB-1366x300px-v1.jpg'
import { Banner } from 'mondrian-react';
const { Fragment } = React;


const BannerComponent: React.FC = () => {
    return (
        <Fragment>
            <Banner
                transparent
                right                                                             // or left
                backgroundColorToken={'var(--theme-background-color--primary)'}  // set your colorToken
                backgroundImageSrc={bannerHome}                                         // set you backgroundImage 
            />

        </Fragment>
    );
}

export default BannerComponent;