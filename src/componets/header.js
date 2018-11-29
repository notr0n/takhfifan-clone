import React, { Component } from 'react';

import '../styles/bs/css/bootstrap-iso.css';
import '../styles/App.css';

export default class Header extends Component {
  render() {
    return (

      <div class="bootstrap-iso">
       <div class="col-lg-12 col-md-12 hidden-sm hidden-xs header0">
        <img
          src={this.props.SRC}
          width="1320px"
        />
       </div>
      </div>

    );
  }
}
