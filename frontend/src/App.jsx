import './App.css';
import React from 'react';
import Home from './home/Home'
import Crud from './crud/Crud';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      menu: false,
      pagina: 0,
      anchorEl:null
    }
  }

  render(){
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              getContentAnchorEl={null}
              keepMounted
              open={this.state.menu}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleHome}>Bienvenida</MenuItem>
              <MenuItem onClick={this.handleCrud}>CRUD</MenuItem>
            </Menu>
            <Typography variant="h6" className='titulo'>
              Analisis y Diseño de Sistemas 1
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="contenido">
          {this.state.pagina === 0? <Home/> : <Crud/>}
        </div>
        
      </div>
    );
  }

  handleClick=(event)=>{
    this.setState({menu:true, anchorEl:event.currentTarget});
  }
  handleClose=()=>{
    this.setState({menu:false, anchorEl:null});
  }
  handleHome=()=>{
    this.setState({pagina:0,menu:false, anchorEl:null});
  }
  handleCrud=()=>{
    this.setState({pagina:1,menu:false, anchorEl:null});
  }
}



export default App;
