import React, { useState, useEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';
import ReactGA from 'react-ga';
import { useHistory } from "react-router";
import { Row, Col } from 'react-bootstrap';
import IMG_Clock from './../../../assets/clock.png';
import IMG_Left from './../../../assets/left.png';
import IMG_Right from './../../../assets/right.png';
import IMG_Last from './../../../assets/last.png';
import IMG_First from './../../../assets/first.png';
import Loading from './../../loading/Loading.js';
import Sidebar from './../../sidebar/Sidebar.js';


import './Blog.css';

function Blog({ t }) {

    ReactGA.initialize('UA-2843161-2', { debug: true });
ReactGA.pageview(window.location.pathname + window.location.search);

    const history = useHistory();

    const nextPage = () => {
        if (currentPage < perPagePost) {
            setCurrentPage(currentPage + 1)
            setPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setPage(currentPage - 1)
        }
    }

    const firstPage = () => {
        setCurrentPage(1)
        setPage(1)
    }

    const lastPage = () => {
        setCurrentPage(perPagePost)
        setPage(perPagePost)
    }

    const setPage = (page) => {
        setCurrentPage(page)
        history.push("/page/" + page);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [perPagePost, setPerPagePost] = useState(0);
    const [paginationButtons, setpaginationButtons] = useState([]);
    const [blogContent, setBlogContent] = useState([]);

   
    useEffect(() => {
        const fetch = async () => {

            let perPage5 = global._.perPage5;
 
            // Blog Posts
            let result = await axios("posts?per_page=" + perPage5 + "&page=" + currentPage);
            setTotalPage(result.headers['x-wp-total']);
            setBlogContent(result.data);
            setPerPagePost(result.headers['x-wp-totalpages']);
            let paginationButtons = [];
            let perPageItems = Math.ceil(result.headers['x-wp-total'] / perPage5); 
            for (let i = 0; i < perPageItems; i++) {
                paginationButtons.push(i + 1)
            }
            setpaginationButtons(paginationButtons);
        }
        fetch();
    }, [currentPage]);

   
    return (
        <div>
            <div className="blog" >
                {blogContent.length > 0 ? (
                    <div>
                        <Row>
                            <Col xs={12} sm={12} md={9} lg={9} xl={9} >
                                {blogContent.map(item => (
                                    <div className="blog-box" key={item.slug}>
                                        <Link to={"/" + item.slug } >
                                            <h1>{item.title.rendered}</h1>
                                        </Link>

                                        <div className="blok-box-content" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered ? item.excerpt.rendered : item.content.rendered }} ></div>
                                        <Row className="time-line" >
                                            <Col>
                                                <div className="time-area">
                                                    <img src={IMG_Clock} alt="" className="png-icon" />
                                                    <Moment format="DD/MM/YYYY">
                                                        {item.date}
                                                    </Moment>
                                                </div>
                                            </Col>
                                            <Col>
                                                <Link to={item.slug} >
                                                    <p className="read-more-button">{t('read-more')}</p>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </Col>

                            <Col xs={12} sm={12} md={3} lg={3} xl={3} className="border-silver" >
                                <Sidebar />
                            </Col>
                        </Row>
                        {totalPage > 0 ? (
                        <div>
                            <Row>
                                <Col xs={12} sm={12} md={9} lg={9} xl={9} >
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={4} xl={4} >
                                            <p className="page-information">{t('page')} {currentPage} / {perPagePost}</p>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={8} xl={8} >

                                            <div className="custom-pagination">
                                                <div disabled={currentPage === 1} onClick={() => firstPage()} >
                                                    <img src={IMG_First} alt="" className="png-icon" />
                                                </div>
                                                <div disabled={currentPage === 1} onClick={() => prevPage()} >
                                                    <img src={IMG_Left} alt="" className="png-icon" />
                                                </div>
                                                {paginationButtons.map(item => (
                                                    (currentPage + 2 >= item && item >= currentPage - 2) &&
                                                    (<div key={item} className={item === currentPage ? "active" : ""} onClick={() => setPage(item)} >{item}</div>)
                                                ))}
                                                <div disabled={currentPage >= perPagePost} onClick={() => nextPage()} >
                                                    <img src={IMG_Right} alt="" className="png-icon" />
                                                </div>
                                                <div disabled={currentPage >= perPagePost} onClick={() => lastPage()}  >
                                                    <img src={IMG_Last} alt="" className="png-icon" />
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        ): ""}
                    </div>) : <Loading />
                }
            </div>
        </div>
    )
}
export default withNamespaces()(Blog);