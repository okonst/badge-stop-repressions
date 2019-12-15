import React, { Component} from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const footers = [
  {
    title: 'Московское дело',
    description: [{desc:'Сайт', link: 'https://mosdelo.org/'}],
  },
  {
    title: 'Новое величие',
    description: [{desc:'Инфо', link: 'https://ovdinfo.org/articles/2018/10/27/delo-novogo-velichiya-kto-eti-lyudi-i-za-chto-ih-sudyat-gid-ovd-info'}],

  },
  {
    title: 'Ростовское дело',
    description: [{desc: 'Сайт', link: 'http://rostovcase.ru/'}],
  },
  {
    title: 'Дело ФБК',
    description: [{desc: 'Сайт', link: 'https://delo.fbk.info/'}],
  },
];

class Footer extends Component{
  render(){
    return(
      
      <Container maxWidth="md" component="footer" className="footer">
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href={item.link} variant="subtitle1" color="textSecondary">
                      {item.desc}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          {/*<Copyright />*/}
        </Box>
      </Container>
      
    );
  }
}

export default Footer;