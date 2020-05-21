import React from 'react';
import './MenuButton.css';
import { Link } from 'react-router-dom';

function MobileMenunuButton ( { data, pathname } ) {
    return (
       <Link to={"/" + data.slug} onClick={()=> {document.title = data.title.rendered}}>
            <div className={ "/" + data.slug === window.location.pathname ? "mobile-menu-button mobile-active" : "mobile-menu-button" } >{data.title.rendered}</div>
       </Link>
    )
  }
  export default MobileMenunuButton;