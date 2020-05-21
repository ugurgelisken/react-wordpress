import React from 'react';
import './_404.css';
function _404 () {
    const redirect = setTimeout( ()=>{
        document.location.href="/";
    },3000);

  
    return (
       <div className="_404">
           <h1>404</h1>
           <p>İçerik bulunamadı, ana sayfaya yönlendiriliyor...</p>
       </div>
    )
}
export default _404;