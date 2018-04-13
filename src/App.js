import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
//for adding authentication in the future
//import auth from './firebase';

class App extends Component {
  
  render () {

    let display = (<BurgerBuilder />);
   
    return (
      <div>
        <Layout>
          {display}
        </Layout>
      </div>
    );
  }
}

export default App;
