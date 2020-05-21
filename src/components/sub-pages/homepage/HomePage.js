import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import { withNamespaces } from 'react-i18next';

function HomePage({ t }) {

  document.title = global._.title;

  let homePath = "/" + global._.specialPageSlugs.home;
  let perPage10 = global._.perPage10;
  let perPage5 = global._.perPage5;

  const [content, setContent] = useState([]);
  const [last10Post, setlast10Post] = useState([]);
  const [last10Comment, setlast10Comment] = useState([]);

  const [temp, setTemp] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios("pages?slug=" + homePath);
      setContent(result.data[0].content);

      let result_last_post = await axios("posts?per_page=" + perPage10 + "&page=1")
      setlast10Post(result_last_post.data)

      let result_last_comments = await axios("comments?per_page=" + perPage5 + "&page=1")
      setlast10Comment(result_last_comments.data)

    }
    fetch();
  }, temp);


  return (
    <div>
      <div className="about" dangerouslySetInnerHTML={{ __html: content.rendered }} ></div>
      <hr className="mt-1" />
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} >
          <div>
            <h6>{t('last_to_post')}</h6>
            {last10Post !== [] ? (
              <ul>
                {last10Post.map((post) =>
                  <li key={post.slug} className="category-item"><Link to={post.slug} >{post.title.rendered}</Link></li>
                )}
              </ul>
            ) : t('no_posts')
            }
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} xl={6} >
          <div>
            <h6>{t('last_to_comments')}</h6>
            {last10Comment !== [] ? (
              <ul className="comment-area">
                {last10Comment.map((comment) =>
                  <li className="comment-list" key={comment.id} >
                    <Row>
                      <Col style={{'maxWidth':'100px'}} >
                        <Moment format="DD/MM/YYYY">
                          {comment.date}
                        </Moment>
                      </Col>
                      <Col  >
                        <div className="category-item comment-on-list" dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                      </Col>
                    </Row>
                  </li>
                )}
              </ul>
            ) : t('no_posts')
            }
          </div>
        </Col>

      </Row>


    </div>
  )
}
export default withNamespaces()(HomePage);