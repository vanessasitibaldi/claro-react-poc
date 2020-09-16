import React, { useEffect, useState } from 'react';
import Slider from 'infinite-react-carousel';

import { useSelector, useDispatch } from "react-redux";
// import { ApplicationState } from '../Core/store';
import '../assets/styles/Styles.css';
import HeaderCLaro from '../Components/Header';
import FooterClaro from '../Components/Footer';
import Products from '../Components/ProductsList';
import BannerHome from '../Components/Banner';
// import { categoriesRequest } from '../Core/Ducks/CategoriesDucks';
import { productsRequest } from '../Core/Ducks/ProductDucks';


interface DefaultRootState {
    categoriesReducer: any,
    productsReducer: any
}

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsRequest())
    }, [])

    const products = useSelector((state: DefaultRootState) => state.productsReducer.payload);
    const planosControle = products.filter(item => item.description.includes('controle'));
    const planosPos = products.filter(item => item.description.includes('pós'));

    const settingsSlider = {
        arrows: false,
        arrowsBlock: false,
        dots: true,
        slidesToShow: 5,
        initialSlide: true,
        virtualList: true,
    }

    return (
        <div id="page-home">
            <HeaderCLaro />
            <BannerHome />
            <div className="content">
                <main>
                    <Products listProducts={planosControle} />
                    <Products listProducts={planosPos} />
                </main>
            </div>
            <FooterClaro />
        </div>
    );
}

export default Home;
