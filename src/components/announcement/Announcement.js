import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Announcement.css';
function Announcement () {

    const [content, setContent] = useState([]);
    const [contentLoaded, setContentLoaded] = useState(false);
    const [visible, setVisible] = useState(true);
    const [id, setId] = useState();

    useEffect(() => {
        async function fetch() {
            const result = await axios( global._.baseURL + 'pages?slug=' + global._.specialPageSlugs.announcement);
           
            setContent(result.data[0].content.rendered);
            setId(result.data[0].id);
            setContentLoaded(true);
        
            if(localStorage.getItem("announcement_"+result.data[0].id)){
                setVisible(false);
            }
            
        }
        fetch();
    }, []);

    const close = (id) =>{
        setVisible(false);
        localStorage.setItem("announcement_"+id, false);
    }
   

    return (
        contentLoaded === true ? 
        (<div className={visible === true ? "announcement" : "hide" } >
            <div className="closeButton" onClick={ ()=> close(id) }>x</div>
            <div dangerouslySetInnerHTML={{ __html: content }} ></div>
            <div className="triangle" >▼</div>
        </div>) : ''
    )
}
export default Announcement;