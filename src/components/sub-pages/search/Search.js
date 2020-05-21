import React, { useState, useEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useHistory } from "react-router";
import { Row, Col } from 'react-bootstrap';
import IMG_Left from './../../../assets/left.png';
import IMG_Right from './../../../assets/right.png';
import IMG_Last from './../../../assets/last.png';
import IMG_First from './../../../assets/first.png';

import Loading from './../../loading/Loading.js'
import Sidebar from './../../sidebar/Sidebar.js';

import './Search.css';

function Search({ t }) {

   
    let { search } = useParams();

    const history = useHistory();

    document.title = search;

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
    const [totalPage, setTotalPage] = useState(-1);
    const [perPagePost, setPerPagePost] = useState(-1);
    const [paginationButtons, setpaginationButtons] = useState([]);
    const [blogContent, setBlogContent] = useState([]);

    useEffect(() => {
    
        const fetch = async () => {
            let result = await axios("search?context=view&per_page=" + global._.perPage20 + "&page=" + currentPage + "&search=" + search);
            setTotalPage(result.headers['x-wp-total']);
            setBlogContent(result.data);
            setPerPagePost(result.headers['x-wp-totalpages'])
            let paginationButtons = [];
            let perPageItems = Math.ceil(result.headers['x-wp-total'] / global._.perPage20); 
            for (let i = 0; i < perPageItems; i++) {
                paginationButtons.push(i + 1)
            }
            setpaginationButtons(paginationButtons);
         
        }
        fetch();
    }, [currentPage, search]);

    const getPath = (pathName) => {
        return pathName.replace(global._.originURL, "");
    }

    return (
        <div>
            <div>
                {totalPage.length >= 0 ? (
                    <div>
                        <Row>
                            <Col xs={12} sm={12} md={9} lg={9} xl={9} >
                            <h5>{t('search_title')}<em>{search}</em></h5><hr/>
                                {blogContent.map(item => (
                                    <div className="search-box" key={item.url} >
                                        <Link to={getPath(item.url)} >
                                            <p>{item.title}</p>
                                        </Link>
                                    </div>
                                ))}
                                <p>{totalPage <= 0 ? t('search_result_no'): ""}</p>
                            </Col>
                           
                            <Col xs={12} sm={12} md={3} lg={3} xl={3} className="border-left" >
                                <Sidebar />
                            </Col>
                        </Row>
                        {totalPage > 0 ? (
                        <Row>
                            <Col xs={12} sm={12} md={9} lg={9} xl={9} >
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} >
                                        <p className="page-information">{t('page')} {currentPage} / {perPagePost}</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={8} xl={8} >
                                        <div className="custom-pagination">
                                            <div disabled={currentPage === 1} onClick={() => firstPage()} >
                                                <img src={IMG_First} alt="created date" className="png-icon" />
                                            </div>
                                            <div disabled={currentPage === 1} onClick={() => prevPage()} >
                                                <img src={IMG_Left} alt="created date" className="png-icon" />
                                            </div>
                                            {paginationButtons.map(item => (
                                                (currentPage + 2 >= item && item >= currentPage - 2) &&
                                                (<div key={item} className={item === currentPage ? "active" : ""} onClick={() => setPage(item)} >{item}</div>)
                                            ))}
                                            <div disabled={currentPage >= perPagePost} onClick={() => nextPage()} >
                                                <img src={IMG_Right} alt="created date" className="png-icon" />
                                            </div>
                                            <div disabled={currentPage >= perPagePost} onClick={() => lastPage()}  >
                                                <img src={IMG_Last} alt="created date" className="png-icon" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        ): ""}
                    </div>) : <Loading />
                }
            </div>
        </div>
    )
}
export default withNamespaces()(Search);