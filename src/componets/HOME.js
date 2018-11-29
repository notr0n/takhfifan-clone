import React, { Component } from 'react';
import {Switch,Route , BrowserRouter} from 'react-router-dom';
import SearchFieldExample from './Navbar.js';
import ListItemComposition from './RightMenu.js';
import Preview1 from './Preview1.js';
import LeftBanner from './LeftB.js';
import Header from './header.js';
import Offers from './offers.js';

import {Box , Image} from 'gestalt';

import '../styles/bs/css/bootstrap-iso.css';
import '../styles/App.css';
import '../styles/gestalt.css';

class HOME extends Component {
  render() {
    return (
              <div>
                      <SearchFieldExample />
                      <LeftBanner/>
                      <Preview1/>
                      <div class="col-md-2 col-lg-2 hidden-sm hidden-xs data1">
                        <ListItemComposition />
                      </div>
                      <Header SRC="http://localhost/uni/p0/banner1.jpg" />
                      <br/>
                      <Offers/><Offers/><Offers/>
                      <Header SRC="http://localhost/uni/p0/banner0.jpg" />
                      <br/>
              </div>
    );
  }
}

export default HOME;
