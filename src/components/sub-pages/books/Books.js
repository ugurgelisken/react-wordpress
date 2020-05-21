import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import $ from 'jquery'; 

import './Books.css';

function Books({ t }) {

  const [portfolio, setPortfolio] = useState([]);
  const [portfolioMedias, setPortfolioMedias] = useState([]);
  const [temp, setTemp] = useState(false);

  useEffect(() => {
    async function fetch() {
      let portfolio_id_result = await axios('categories?per_page=100&slug=' + global._.specialPageSlugs.portfolio);
      let porfolio_id = portfolio_id_result.data[0].id;
      let result = await axios('pages?categories=' + porfolio_id);
      setPortfolio(result.data.sort(()=> (a,b) => {
          return new Date(b.date) - new Date(a.date)
      }));
      for (var i in result.data) {
        async function setMedia() {
          const media = await axios("media/" + result.data[i].featured_media);
          setPortfolioMedias(portfolioMedias => [...portfolioMedias, media.data]);
        }
        setMedia();
      }
    }
    fetch();
  }, []);

  const getMediaElement = id => {
    if (portfolioMedias) {
      let featuredMedia = portfolioMedias.find(item => item.id === id);
      if (featuredMedia) {
        return "<img src='" + featuredMedia.source_url + "' alt='" + featuredMedia.title.rendered + "' />";
      }
    }
  }

  const history = useHistory();

  const go = (title, slug) => {
    document.title = title;
  }

  const showTitle = id => {
    $("#"+id+ " .portfolio-title").css({'top': '0px'})
  }

  const hideTitle = id => {
    $("#"+id+ " .portfolio-title").css({'top': '-100px'})
  }

  return (

    <Row className="m0">
      {portfolio.map(item => (
        <Col className="p0 center hide-box" id={item.id} key={item.link} xs={6} sm={4} md={3} lg={2} xl={2} onMouseOver={()=>showTitle(item.id)} onMouseOut={()=>hideTitle(item.id)} >
          <div className="img" dangerouslySetInnerHTML={{ __html: getMediaElement(item.featured_media) }} />
          <div className="portfolio-title">{item.title.rendered}</div>
          <a href={'/portfolio/'+item.slug} onClick={() => go(item.title.rendered) } className="read-more-button fix">{t('view')}</a>
        </Col>
      ))}
    </Row>

  )
}
export default withNamespaces()(Books);