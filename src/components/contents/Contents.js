import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Contents.css';

import HomePage from './../sub-pages/homepage/HomePage.js';
import About from './../sub-pages/about/About.js';
import Books from './../sub-pages/books/Books.js';
import Projects from './../sub-pages/projects/Projects.js';
import Contact from './../sub-pages/contact/Contact.js';
import Blog from './../sub-pages/blog/Blog.js';
import Search from './../sub-pages/search/Search.js';
import Category from './../sub-pages/category/Category.js';
import Page from './../sub-pages/page/Page.js';
import Portfolio from './../sub-pages/portfolio/Portfolio.js';
import _404 from './../_404/_404.js';

function Contents () {
    return (
      <div className="contents">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/home" render={() => <HomePage />} />
          <Route exact path='/hakkimda' render={() => <About />} />
          <Route exact path='/kitaplar' render={() => <Books />} />
          <Route exact path='/proje' render={() => <Projects />} />
          <Route exact path='/iletisim' render={() => <Contact />} />
          <Route exact path='/blog' render={() => <Blog />} />
          <Route exact path="/blog/:search" render={() => <Search />} />
          <Route exact path='/page/:page' render={() => <Blog />} />
          <Route exact path='/category/:category' render={() => <Category />} />
          <Route exact path='/category/:category/page/:id' render={() => <Category />} />
          <Route exact path="/portfolio/:id" render={() => <Portfolio />} />
          <Route exact path="/tag/:category" render={() => <Category />} />
          <Route exact path="*" render={() => <Page />} />
        </Switch>
      </div>
    )
}

export default Contents;