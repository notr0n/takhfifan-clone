import React , {Component} from 'react';
import Slider from 'react-animated-slider';

import 'react-animated-slider/build/horizontal.css';
import '../styles/App.css';
import '../styles/gestalt.css';
import '../styles/bs/css/bootstrap-iso.css';

export default class Slider0 extends Component {
  render() {
    return (
      <div class="bootstrap-iso" >
          <Slider>
          <img src="http://localhost/uni/p1/s0.jpg" />
          <img src="http://localhost/uni/p1/s1.jpg" />
          </Slider>
      </div>
    );
  }
}
