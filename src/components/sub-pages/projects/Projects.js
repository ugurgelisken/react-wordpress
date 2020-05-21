import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Projects.css';

function Projects () {

    const [content, setContent] = useState([]);

    useEffect(() => {
        let projectPath = "/" + global._.specialPageSlugs.projects;
        async function fetch() {
            const result = await axios( global._.baseURL + 'pages?slug=' + projectPath)
            setContent(result.data[0].content.rendered)
        }
        fetch();
    });

    return (
      <div className="Projects" dangerouslySetInnerHTML={{ __html: content }} ></div>
    )

  }
  export default Projects;




