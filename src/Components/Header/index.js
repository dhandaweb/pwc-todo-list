import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/BookmarkBorder';


export default class Header extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    }

  }



  render() {
   
    return (
      <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" >
          PwC Technical Challenge
        </Typography>
      </Toolbar>
    </AppBar>
    );
  }
};