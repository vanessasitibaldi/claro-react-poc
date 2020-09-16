import React from 'react';
import Slider from 'infinite-react-carousel';

import CardElement from '../Elements/CardElement';
import '../assets/styles/Styles.css';
const { Fragment } = React;


interface price {
    value: number;
}
interface product {
    code: string;
    name: string;
    price: price;
    url: string;
}

interface ProductListProps {
    listProducts: product[]
}

const settingsSlider = {
    arrows: false,
    arrowsBlock: false,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
}

const ProductList: React.FC<ProductListProps> = ({ listProducts }) => {
    console.log('listProducts comp >>>', listProducts)


    return (
        <Fragment>
            <div id="productList">
                <Slider {...settingsSlider}>
                    <div>
                        {listProducts && listProducts.map((product, i) => {
                            return (
                                <div data-index={i} key={product.code} className="cardsProducts">
                                    <CardElement title={product.name} price={product.price.value} url={product.url} />
                                </div>
                            )
                        })}
                    </div>
                </Slider>
            </div>
        </Fragment>
    );
}

export default ProductList;