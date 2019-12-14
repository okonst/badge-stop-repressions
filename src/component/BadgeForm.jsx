import React, { Component} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import logoDark from "../../public/image/logo_dark.png";


class BadgeForm extends Component{
  constructor(){
    super();
    this.state = {
      // тип badge/banner
      type: "badge",
      // расположение left/right/top
      place: "left",
      // выравнивание по вертикали top/middle/bottom
      alignY: "top",
      // цвет light/dark
      colorStyle: "light",

      // код js
      div: "<div id='stop-repressions-banner'></div>",
      code: "",
      showCode: false,

      // ссылка
      src: "https://site.ru/stop-repressions.js",
    }
    // bindings
    this.onChange = this.onChange.bind(this);
    this.generateCode = this.generateCode.bind(this);
    this.copyCode = this.copyCode.bind(this);
    this.closeCode = this.closeCode.bind(this);
  }
  render(){
    // позиция бейджа
    let position = {};
    position[this.state.place] = 0;
    if(this.state.place == 'left' || this.state.place == 'right'){
      if(this.state.alignY == 'top') position.top = 80;
      if(this.state.alignY == 'bottom') position.bottom = 48;
      if(this.state.alignY == 'middle') position.top = "50%";
    }
    if(this.state.place == 'bottom'){
      if(this.state.alignX == 'left' || this.state.alignX == 'right') position[this.state.alignX] = 24;
      if(this.state.alignX == 'center') position.left = "45%";
    }

    return(
          <Grid container spacing={3} className="badge_form">
            {/* Левая часть - демо */}
            <Grid item xs={6} className="demo">
              <Paper className="paper">
                {/* Ваш сайт */}
                <AppBar position="static" color="primary" elevation={0} className="demo_header">
                  <Toolbar>
                    <Typography variant="h6" className="header_title">
                      Ваш сайт
                    </Typography>
                  </Toolbar>
                </AppBar>

                {/* Бейдж */}
                {this.state.type == "badge" &&
                <div className={"badge " + this.state.place} style={{...position}}>
                  <Button variant="contained" color="secondary" onClick={this.showFull}>
                        #37
                      </Button>
                </div>  }

                {/* Баннер */}
                {this.state.type == "banner" &&
                <div className={"banner"} style={{...position}}>
                  <Typography variant="h6">
                     <img src={logoDark} />
                     <span>Мы против<br/>репрессий</span>
                  </Typography>
                </div>  }


              </Paper>
            </Grid>

            {/* Правая_часть - форма */}
            <Grid item xs={6}>
              <Paper className="paper">
                <form>

                  {/* Вид значок/баннер */}
                  <FormControl component="fieldset" className="" fullWidth margin="normal">
                    <FormLabel component="legend">Вид</FormLabel>
                    <RadioGroup aria-label="type" name="type" value={this.state.type} onChange={this.onChange} row>
                      <FormControlLabel value="badge" control={<Radio color="primary" />} label="Значок" />
                      <FormControlLabel value="banner" control={<Radio color="primary" />} label="Баннер" />
                    </RadioGroup>
                  </FormControl>

                  {/* Цвет */}
                  <FormControl component="fieldset" className="" fullWidth margin="normal">
                    <FormLabel component="legend">Цвет</FormLabel>
                    <RadioGroup aria-label="colorStyle" name="colorStyle" value={this.state.colorStyle} onChange={this.onChange} row>
                      <FormControlLabel value="light" control={<Radio color="primary" />} label="Светлый" />
                      <FormControlLabel value="dark" control={<Radio color="primary" />} label="Темный" />
                    </RadioGroup>
                  </FormControl>

                  {/* Расположение слева/справа */}
                  {this.state.type == 'badge' &&
                  <FormControl component="fieldset" className="" fullWidth margin="normal">
                    <FormLabel component="legend">Расположение на странице</FormLabel>
                    <RadioGroup aria-label="place" name="place" value={this.state.place} onChange={this.onChange} row>
                      <FormControlLabel value="left" control={<Radio color="primary" />} label="Слева" />
                      <FormControlLabel value="right" control={<Radio color="primary" />} label="Справа" />
                      {/*<FormControlLabel value="bottom" control={<Radio color="primary" />} label="Внизу" />*/}
                    </RadioGroup>
                  </FormControl>  }

                  {/* Выравнивание по вертикали */}
                  {(this.state.type == 'badge' && (this.state.place == 'left' || this.state.place == 'right')) &&
                  <FormControl component="fieldset" className="" fullWidth margin="normal">
                    <FormLabel component="legend">Выравнивание по вертикали</FormLabel>
                    <RadioGroup aria-label="alignY" name="alignY" value={this.state.alignY} onChange={this.onChange} row>
                      <FormControlLabel value="top" control={<Radio color="primary" />} label="По верху" />
                      <FormControlLabel value="middle" control={<Radio color="primary" />} label="По середине" />
                      <FormControlLabel value="bottom" control={<Radio color="primary" />} label="По низу" />
                    </RadioGroup>
                  </FormControl>  }
                  
                  <div>
                    <FormControl component="div" className="" margin="normal">
                      <Button variant="contained" color="primary" onClick={this.generateCode}>
                        Получить код
                      </Button>
                    </FormControl>
                  </div>

                </form>

              </Paper>

            </Grid>

            {/* Код для скачивания */}
            {this.state.showCode == true && 
            <Grid item xs={12}>
              <Paper className="paper code_block">
                <Typography variant="h5" className="code_header">
                  Код для вставки
                </Typography>

                {/* div для вставки баннера */}
                {this.state.type == 'banner' &&
                <div>
                  <Typography variant="body1" component="p" className="code_comment" color="textSecondary">
                    Вставь этот код на свой сайт в то место, где должен быть баннер, внутри тега &lt;body&gt;. Баннер займет место по ширине родительского элемента.
                  </Typography>
                  
                  <Typography variant="body1" component="code" className="code_js">
                    {this.state.div}
                  </Typography>

                  <div className="code_buttons interim">
                    <Button variant="outlined" color="primary" onClick={()=>this.copyCode("div")}>
                      Скопировать
                    </Button>
                    {this.state.divCopied == true &&
                      <span>Код скопирован</span>  }
                  </div>
                </div>}

                {/* script для вставки js */}
                <Typography variant="body1" component="p" className="code_comment" color="textSecondary">
                  Вставь этот код на свой сайт в любое место внутри тега &lt;header&gt;.
                </Typography>
                
                <Typography variant="body1" component="code" className="code_js">
                  {this.state.code}
                </Typography>

                <div className="code_buttons">
                  <Button variant="outlined" color="primary" onClick={()=>this.copyCode("code")}>
                    Скопировать
                  </Button>
                  <Button variant="contained" color="primary" onClick={this.closeCode}>
                    Закрыть
                  </Button>
                  {this.state.codeCopied == true &&
                  <span>Код скопирован</span>  }
                </div>


              </Paper>
            </Grid>  }


          </Grid>

          

    );
  }

  // изменить значения state
  onChange(e){
    console.log('Change ' + e.target.name, e.target.value);
    this.setState({[e.target.name]: e.target.value, showCode: false});
  }
  // скопирвать код (type = code/div)
  copyCode(type = "code"){
    window.navigator.clipboard.writeText(this.state[type]).then(r=>{
      this.setState({[type+"Copied"]: true});
      setTimeout(()=>{this.setState({[type+"Copied"]: false});}, 2000);
    }).catch(e=>concole.log('error', e));
  }
  // закрыть код
  closeCode(){
    this.setState({showCode: false});
  }
  // сгенерировать код
  generateCode(){
    let code = "<script id='stop-repressions' src='"+this.state.src+"' data-type='"+this.state.type+"' data-color='"+this.state.colorStyle+"'";
    if(this.state.type == 'badge'){
      code += " data-place='"+this.state.place+"'";
      code += " data-alignY='"+this.state.alignY+"'";
    }
    code += " defer></script>";
    this.setState({code: code, showCode: true});
    return;
  }
}

export default BadgeForm;