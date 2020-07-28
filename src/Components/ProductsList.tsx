import React, { useEffect } from 'react';
import productsList from '../assets/Products.json';
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

const ProductList: React.FC<ProductListProps> = ({ title, subtitle, descricao }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsRequest())
    }, [dispatch])

    const productsList = useSelector(state => console.log('state', state))

    // const renderProductList = () => {
    //     return productsList.map(item => {
    //         return (
    //             <div key={item.id} className="cardsProducts">
    //                 <CardElement title={item.titleProduct} price={item.price} url={item.url} />
    //             </div>
    //         )
    //     })
    // }

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