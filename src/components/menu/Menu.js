import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css';
import MenuButton from "./MenuButton.js";
import MobileMenu from "./MobileMenu.js";
import { Link } from 'react-router-dom';

import { withNamespaces } from 'react-i18next';
import { Row, Col, Container } from 'react-bootstrap';

import IMG_HomeIcon from './../../assets/home.svg';
import IMG_CircleIcon from './../../assets/write-me.svg';



function Menu({ t }) {

    const [menu, setMenu] = useState([]);
  
    useEffect(() => {
        async function fetch() {
            let result = await axios(global._.baseURL + 'pages?per_page=100');
            setMenu(result.data.filter(item => item.categories.length === 0 ))
        }
        fetch();
    }, []);

    return (
        <div>
            <div className="menu d-none d-lg-block">
                <Container fluid="true">
                    <Row className="m0">
                        <Col  lg={1} xl={1} >
                            <Link to="/" >
                                <div className="home-button">
                                    <img className="home" src={IMG_HomeIcon} alt="" />
                                </div>
                            </Link>
                        </Col>
                        <Col className="d-none d-lg-block" lg={8} xl={8} >
                            <Row>
                                {menu.map(item => (
                                    <div key={item.slug}>{item.slug !== global._.specialPageSlugs.home ? <Col ><MenuButton data={item} pathname={window.location.pathname} /></Col> : "" }</div> 
                                ))}
                            </Row>
                        </Col>
                        <Col className="d-none d-lg-block" lg={3} xl={3}>
                            <Link to={ global._.specialPageSlugs.contact }>
                                <div className="write-me">{t('write-me')}
                                    <img className="circle" src={IMG_CircleIcon} alt="" />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="d-lg-none" >
                <MobileMenu menu={menu}  />
            </div>
        </div>
    )
}
export default withNamespaces()(Menu);