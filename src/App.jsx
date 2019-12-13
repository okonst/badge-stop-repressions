import React, { Component} from "react";
import {hot} from "react-hot-loader";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import "./App.less";

class App extends Component{
  render(){
    return(
      <div className="app">
          <CssBaseline />

          <Header />

          <Main/>

          <Footer/>
      </div>
    );
  }
}

export default hot(module)(App);