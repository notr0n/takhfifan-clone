import React, { Component } from 'react';
import '../styles/bs/css/bootstrap-iso.css';
import '../styles/App.css';

export default class LeftBanner extends Component {
  render() {
    return (
      <div class="bootstrap-iso">
        <div class="col-lg-3 col-md-3 data1">
            <img
              height= "420px"
              width= "290px"
              class="img0"
              src="http://localhost/uni/p0/LeftBanner.jpg"
              />
        </div>
      </div>
    );
  }
}
