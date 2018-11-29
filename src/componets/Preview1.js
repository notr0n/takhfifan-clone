import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {Image , Box , Text} from 'gestalt';

import '../styles/gestalt.css';
import '../styles/App.css';
import '../styles/bs/css/bootstrap-iso.css';

class Preview1 extends Component {
  render() {
    return (
  <div class="bootstrap-iso">
        <div class="col-md-7 col-lg-7 hidden-sm hidden-xs data1">
            <Paper>
                    <div class="col-lg-7 col-md-7">

                    </div>
                    <div class="col-lg-5 col-md-5 data2">
                        <center>
                            <img
                              class="img0"
                              src="http://localhost/uni/p0/offer0.jpg"
                            /><br/><br/>
                            <img
                              class="img0"
                              height="340px"
                              width="290px"
                              src="http://localhost/uni/p0/cam0.jpg"
                            />
                        </center>
                    </div>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/>
            </Paper>
        </div>
   </div>

    );
  }
}

export default Preview1;
