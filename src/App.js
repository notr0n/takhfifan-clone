import React, { Component } from 'react';
import {Switch,Route , BrowserRouter} from 'react-router-dom';
import HOME from './componets/HOME.js';
import CAT from './componets/CAT.js';
import PRODUCT from './componets/PRODUCT.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
          <div>
            <Route path="/" exact component={HOME} />
            <Route path="/category" exact component={CAT} />
            <Route path="/product" exact component={PRODUCT} />
          </div>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
