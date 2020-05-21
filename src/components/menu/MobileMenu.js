import React, { useState } from 'react';
import './MobileMenu.css';
import MobileMenuButton from "./MobileMenuButton.js";
import { Link } from 'react-router-dom';

import { withNamespaces } from 'react-i18next';
import IMG_MobileMenuIcon from './../../assets/menu.svg';
import IMG_Loading from './../../assets/loading.gif';

function MobileMenu({ t, menu }) {

    const [menuToggle, setMenuToggle] = useState(false);
    const [menuBackgroundToggle, setMenuBackgroundToggle] = useState(false);

    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
        handleScroll();
        window.scrollTo(window.pageYOffset + 1, 0);
    }

    const handleScroll = () => {
        if (menuToggle === false && window.pageYOffset >= 20) {
            setMenuBackgroundToggle(true);
        } else if (menuToggle === true) {
            setMenuBackgroundToggle(false);
        } else if (window.pageYOffset < 20) {
            setMenuBackgroundToggle(false);
        } else {
            setMenuBackgroundToggle(false);
        }
    }

    window.addEventListener('scroll', handleScroll);

    let contactPath = "/" + global._.specialPageSlugs.contact;

    return (
        <div >
            <div className={menuToggle === false ? 'menu-icon-area' : 'menu-icon-area'}>
                <img className="menu-icon" src={IMG_MobileMenuIcon} onClick={() => toggleMenu()} alt="" />
                <div className={menuBackgroundToggle === true ? 'menu-icon-background-visible' : 'menu-icon-background-hide'}></div>
            </div>

            <div className={menuToggle === true ? 'menu-area-open' : 'menu-area-close'} >
                <hr className="m0" />
                {menu.length > 0 ? (
                    <div>
                        {
                            menu.map(item => (
                                <div key={item.slug} onClick={() => toggleMenu()} >
                                    <MobileMenuButton data={item} pathname={window.location.pathname} />
                                </div>
                            ))
                        }
                        <Link onClick={() => toggleMenu()} to={ contactPath }>
                            <div className={contactPath === window.location.pathname ? "mobile-menu-button mobile-active" : "mobile-menu-button"} >{t('write-me')}</div>
                        </Link>
                    </div>
                ) : (<div className="loading">
                    <img src={IMG_Loading} alt="" />
                </div>)}
            </div>
        </div>
    )
}
export default withNamespaces()(MobileMenu);