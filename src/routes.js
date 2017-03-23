import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App.jsx'
import About from './About.jsx'
import Header from  './components/materialUi/Header.jsx'
import styles from './components/styl/styles.styl'

const BasicExample  = (
  <MuiThemeProvider>
    <div>
      <Header />
      <Router history={browserHistory} >
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  </MuiThemeProvider>
)

export default BasicExample
