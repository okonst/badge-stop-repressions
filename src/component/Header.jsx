import React, { Component} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import logoDark from "../../public/image/logo_dark.png";
import logoLight from "../../public/image/logo_light.png";


class Header extends Component{
  render(){
    return(
      	<AppBar position="static" color="default" elevation={0} className="header">
          
          <Toolbar>
            <img src={logoLight} width="50px"/>
            <Typography variant="h6" className="header_title">
              Мы против политических репрессий
            </Typography>

            {/*<nav className="header_menu">
              <Link variant="button" color="textPrimary" href="#" className="link">
                Features
              </Link>
              <Link variant="button" color="textPrimary" href="#" className="">
                About
              </Link>
              <Link variant="button" color="textPrimary" href="#" className="">
                Contact
              </Link>
            </nav>*/}

          </Toolbar>
  	    </AppBar>
    );
  }
}

export default Header;