import React, { useEffect, useState } from 'react';
// import productsList from '../assets/Products.json';
import '../assets/styles/Styles.css';
import { Heading, Subtitle, Text } from 'mondrian-react';
import CardElement from '../Elements/CardElement';
import { useSelector, useDispatch } from 'react-redux';
import { productsRequest } from '../Core/Ducks/productCatalogDucks';
const { Fragment } = React;

interface ProductListProps {
    title: string;
    subtitle: string;
    descricao: string
}
interface DefaultRootState {
    productsReducer: any
}


const ProductList: React.FC<ProductListProps> = ({ title, subtitle, descricao }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('uma vez')
        dispatch(productsRequest())

    }, [])

    const productsList = useSelector((state: DefaultRootState) => state.productsReducer.payload[5]) || [];

    console.log('productsList', productsList)

    const renderProductList = () => {
        // return products.map(product => {
        //     console.log('product >>>>>', product)
        //     return (
        //         <div key={product.id} className="cardsProducts">
        //             <CardElement title={product.titleProduct} price={product.price} url={product.url} />
        //         </div>
        //     )
        // })
    }

    return (
        <Fragment>
            <div id="productList">
                <div className="titleList">
                    <Subtitle sm="true">{subtitle}</Subtitle>
                    <Heading md="true">{title}</Heading>
                    <Text body>{descricao}</Text>
                </div>
                {/* {renderProductList()} */}
            </div>
        </Fragment>
    );
}

export default ProductList;