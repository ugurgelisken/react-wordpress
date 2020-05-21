import React from 'react';
import './Header.css';
import { withNamespaces } from 'react-i18next';

import IMG_Photo from './../../assets/photo.png';
import IMG_UDEMY from './../../assets/udemy.svg';
import IMG_LINKEDIN from './../../assets/linkedin.svg';
import IMG_GOOGLEBOOKS from './../../assets/googlebooks.svg';

function Header ( { t } ) {

    let gotoURL = (url) => window.open(url, '_blank');

    let pathAbout = "/" + global._.specialPageSlugs.about;
    
    return (
      <div className="header">
         <a href={pathAbout} ><img className="photo" src={IMG_Photo} alt= {t('title') } /></a>
         <h6> {t('title') }</h6>
         <div className="degree">
          <p> {t('sub-title-1') }</p>
          <p> {t('sub-title-2') }</p>
          <p> {t('sub-title-3') }</p>
          <p> {t('sub-title-4') }</p>
         </div>
         <div className="social-media-area">
         <img className="social-media-icon" src={IMG_LINKEDIN} alt= "Linkedin" title= "Linkedin" onClick={()=>gotoURL( global._.socialMediaURL.linkedin )} />
         <img className="social-media-icon" src={IMG_UDEMY} alt= "Udemy" title= "Udemy" onClick={()=>gotoURL( global._.socialMediaURL.udemy )} />
         <img className="social-media-icon opacity9" src={IMG_GOOGLEBOOKS} alt= "Google Books" title= "Google Books" onClick={()=>gotoURL( global._.socialMediaURL.googlePlay )} />
         </div>    
      </div>
    )
  }
  export default withNamespaces()(Header);

