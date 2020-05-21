import React from 'react';
import './Footer.css';
import { withNamespaces } from 'react-i18next';
import { Row, Col, Container } from 'react-bootstrap';

function Footer({ t }) {
  return (
    <div className="footer">
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col>{t('title')}</Col>
          <Col className="right copy-right">{t('copyright')}</Col>
        </Row>
      </Container>
    </div>
  )
}
export default withNamespaces()(Footer);