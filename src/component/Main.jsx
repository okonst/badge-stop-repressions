import React, { Component} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import BadgeForm from './BadgeForm'


class Main extends Component{
  render(){
    return(

        <Container maxWidth="md" component="main" className="main">
          
          {/* Верхняя часть */}
          <Container maxWidth="sm" className="top_block">
            <Typography component="h3" variant="h5" align="center" color="textPrimary" gutterBottom>
              Добавь значок на свой сайт
            </Typography>
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Мы против политических репрессий
            </Typography>
            
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              Выбери вариант размещения значка или баннера, и получи код для вставки на свой сайт. Это займет 2 минуты.
            </Typography>
          </Container>

          {/* Форма */}
          <BadgeForm/>

        </Container>
    );
  }
}

export default Main;