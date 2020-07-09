import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { ApplicationState } from '../Core/store';
import '../assets/styles/Styles.css';
import HeaderCLaro from '../Components/Header';
import FooterClaro from '../Components/Footer';
import Products from '../Components/ProductsList';
import BannerHome from '../Components/Banner';


const Home = () => {

    return (
        <div id="page-home">
            <HeaderCLaro />
            <BannerHome />
            <div className="content">
                <main>
                    <Products
                        title="O básico para o dia a dia"
                        subtitle="Claro Controle"
                        descricao="Todos os planos vêm com ligações ilimitadas, para você falar à vontade."
                    />
                    <Products
                        title="Para quem é ultra conectado"
                        subtitle="Claro Pós"
                        descricao="Todos os planos vêm com ligações ilimitadas, para você falar à vontade."
                    />
                </main>
            </div>
            <FooterClaro />
        </div>
    );
}

export default Home;
