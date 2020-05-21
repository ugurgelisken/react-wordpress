import React from 'react';
import './SocialShare.css';
import ICON_Facebook from './../../assets/social/facebook.png';
import ICON_Linkedin from './../../assets/social/linkedin.png';
import ICON_Mail from './../../assets/social/mail.png';
import ICON_Whatsapp from './../../assets/social/whatsapp.png';
import ICON_Pinterest from './../../assets/social/pinterest.png';
import ICON_Twitter from './../../assets/social/twitter.png';

const shareThis = type => {
   
    const pageURL = window.location.href;
    const pageTITLE = document.title;

    switch (type) {
        case "linkedin": {
            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${pageURL}`,'_blank');
            break;
        }
        case "facebook": {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageURL}`,'_blank');
            break;
        }
        case "twitter": {
            window.open(`https://twitter.com/intent/tweet?text=${pageTITLE}&url=${pageURL}`,'_blank');
            break;
        }
        case "pinterest": {
            let e = document.createElement('script' );
            e.setAttribute('type','text/javascript' );
            e.setAttribute('charset','UTF-8' );
            e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
            document.body.appendChild(e);           
            break;
        }
        case "whatsapp": {
            window.open(`https://wa.me/?text=${pageURL}`,'_blank');
            break;
        }
        case "mail": {
            window.open(`mailto:?subject=${pageTITLE}&body=${pageURL}`);
            break;
        }
        default : {
           //
        }
    }
}

function SocialShare() {
    return (
        <div className="social-icons">
            <img onClick={() => shareThis('linkedin')} title="Linkedin" alt="Linkedin" src={ICON_Linkedin} />
            <img onClick={() => shareThis('facebook')} title="Facebook" alt="Facebook" src={ICON_Facebook} />
            <img onClick={() => shareThis('twitter')} title="Twitter" alt="Twitter" src={ICON_Twitter} />
            <img onClick={() => shareThis('pinterest')} title="Pinterest" alt="Pinterest" src={ICON_Pinterest} />
            <img onClick={() => shareThis('whatsapp')} title="Whatsapp" alt="Whatsapp" src={ICON_Whatsapp} />
            <img onClick={() => shareThis('mail')} title="Mail" alt="Mail" src={ICON_Mail} />
        </div>
    )
}
export default SocialShare;