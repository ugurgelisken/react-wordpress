import React from 'react';
import { useHistory } from 'react-router-dom';

import './MenuButton.css';

function MenuButton({ data }) {

  const history = useHistory();

  const go = (title, slug) => {
    document.title = title;
    history.push('/'+slug);
  }

  return (
    <div onClick={() => go(data.title.rendered, data.slug ) } className={"/" + data.slug === window.location.pathname ? "menu-button active" : "menu-button"} >{data.title.rendered}</div>
  )
  
}
export default MenuButton;