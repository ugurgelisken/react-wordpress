import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';
import { withNamespaces } from 'react-i18next';
import Loading from './../../loading/Loading.js';
import SocialShare from './../../social-share/SocialShare.js';
import Comments from './../../sub-pages/page/Comments';

function Portfolio({ t }) {

    const path = window.location.pathname;
    const [pageContent, setPageContent] = useState();
    const [promoContent, setPromoContent] = useState();
    const [temp, setTemp] = useState(false);

  
    axios.defaults.baseURL = global._.baseURL;

    useEffect(() => {
       
            async function fetch() {
                    const result = await axios("pages?slug=" + path.split("/")[2]);
                    setPageContent(result.data[0]);
                    if (result.data[0]) {
                        document.title = result.data[0].title.rendered;
                    }
                

                const resultPromo = await axios("pages?slug=promo");
              
                if (resultPromo.data[0]) {
                    setPromoContent(resultPromo.data[0]);
                }

            }
            fetch();
        
    }, [temp] );

    useEffect(() => {
        setPageContent(null);
    }, [temp] );

    return (
        <div>
            {pageContent ? (
                <div>
                    <h1>{pageContent.title.rendered}</h1>
                    <hr />
                    <SocialShare />
                    <div className="pageContent" dangerouslySetInnerHTML={{ __html: pageContent.content.rendered }}></div>
                    <hr />
                    <SocialShare />
                    { promoContent ?
                        (<div className="promoContent" dangerouslySetInnerHTML={{ __html: promoContent.content.rendered }}></div>) : ""
                    }
                    <br/>
                    {
                        pageContent.comment_status==="open" ? <Comments pageId={pageContent.id} /> : t('disable_comments')
                    }
                </div>
            ) : (<Loading/>)
            }
        </div>
    )
}
export default withNamespaces()(Portfolio);