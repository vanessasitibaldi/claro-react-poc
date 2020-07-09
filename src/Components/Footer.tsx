import React from 'react';
import '../assets/styles/Styles.css';
// import { Link } from 'react-router-dom';
import { Footer, Collapse } from 'mondrian-react';
const { Fragment } = React;



const FooterCLaro = () => {
    return (
        <Fragment>
            <div id="footer-claro">
                <Collapse
                    title={'Mapa do Site'}  // set your title to Collapse here
                >
                    <div>
                        <ul className="links-footer">
                            <li className="bloco-links-esquerda">
                                <ul>
                                    <li className="linkfooter">Planos Controle</li>
                                    <li className="linkfooter">Planos Pós</li>
                                    <li className="linkfooter">Aparelhos</li>

                                </ul>

                            </li>
                            <li className="bloco-links-direita">
                                <ul>
                                    <li className="linkfooter">Regulamentos</li>
                                    <li className="linkfooter">Perguntas Frequentes</li>
                                    <li className="linkfooter">Acessibilidade</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </Collapse>

                <Footer
                    datafooter={  // set you list of social this object
                        [
                            {
                                icon: "facebook",
                                href: "https://claro.com.br"
                            },
                            {
                                icon: "twitter",
                                href: "https://claro.com.br"
                            },
                            {
                                icon: "youtube",
                                href: "https://claro.com.br"
                            },
                            {
                                icon: "linkedin",
                                href: "https://claro.com.br"
                            }
                        ]
                    }>
                    © 2019 Claro. Todos os direitos reservados.
                </Footer>
            </div>
        </Fragment>
    );
}

export default FooterCLaro;