import React from 'react';
import axios from 'axios';

import Menu from "../menu/Menu.js";
import Header from "../header/Header";
import Contents from "../contents/Contents.js";
import Footer from "../footer/Footer.js";
import Announcement from "../announcement/Announcement.js";

import './../../Config';

import { withNamespaces } from 'react-i18next';
import { Row, Col, Container } from 'react-bootstrap';

import './Main.css';

axios.defaults.baseURL = global._.baseURL;
axios.defaults.headers.common['Authorization'] = global._.wpToken;


function Main() {
  
  return (
    <div>
      <Container fluid="true" className="p0" >
        <Row className="justify-content-center" >
          <Col xs={12} sm={12} md={12} lg={11} xl={9} >
            <Row>
              <Col xs={12} sm={12} md={12} lg={2} xl={2} className="p0" >
                <Header />
              </Col>
              <Col xs={12} sm={12} md={12} lg={9} xl={8} >
                <Menu />
                <Contents />
                <Announcement />
                <Footer />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default withNamespaces()(Main);

