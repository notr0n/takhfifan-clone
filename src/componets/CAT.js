import React, { Component } from 'react';
import NavBar from './Navbar.js';
import ListItemComposition from './RightMenu.js';
import Offers from './offers.js';

import '../styles/bs/css/bootstrap-iso.css';
import '../styles/gestalt.css';
import '../styles/App.css';

class CAT extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <h3><center>نام دسته بندی</center></h3>

          <div class="col-md-10 col-lg-10 col-sm-12 col-xs-12">
              <Offers/><Offers/><Offers/>
              <Offers/><Offers/><Offers/>
          </div>
          <div class="col-md-2 col-lg-2 hidden-sm hidden-xs data1">
            <ListItemComposition />
          </div>
      </div>
    );
  }
}

export default CAT;
