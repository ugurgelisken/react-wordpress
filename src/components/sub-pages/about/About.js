import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';

import './About.css';

function About () {

    ReactGA.initialize('UA-2843161-2');
    ReactGA.pageview(window.location.pathname + window.location.search);

    let aboutPath = "/" + global._.specialPageSlugs.about;

    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetch() {
            const result = await axios( global._.baseURL + 'pages?slug=' + aboutPath)
            setContent(result.data[0].content.rendered)
        }
        fetch();
    });

    return (
      <div className="about" dangerouslySetInnerHTML={{ __html: content }} ></div>
    )
    
}
export default About;