import React from 'react';
import '../assets/styles/Styles.css';
import { Header, Text } from 'mondrian-react';
import { Link } from 'react-router-dom';

const { Fragment } = React;


const HeaderCLaro = () => {
    return (
        <Fragment>
            <div className="top-bar"></div>
            <Header
                brandSrc={'https://mondrian.claro.com.br/brands/inverse/claro.svg'}
            >
                <div className="menu">
                    <ul className="links-menu">
                        <li><Link to="/"><Text body inverse>Inicio</Text></Link></li>
                        <li><Link to="/planos-controle"><Text body inverse>Planos Controle</Text></Link></li>
                        <li><Link to="/planos-pos"><Text body inverse>Planos Pós</Text></Link></li>
                        <li><Link to="/aparelhos"><Text body inverse>Aparelhos</Text></Link></li>
                    </ul>
                </div>
            </Header>
        </Fragment>
    );
}

export default HeaderCLaro;