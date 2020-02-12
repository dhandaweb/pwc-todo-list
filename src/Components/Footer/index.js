import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default class Footer extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default" style={{boxShadow:"none",background:"#fff"}}>
        <Toolbar>
          <Typography variant="body1" align="center" color="inherit" >
          Developed by : <Link href=" http://dharminder.dhanda.com.au/" >
          Dharminder Dhanda | Senior full stack developer
       </Link>
      
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
};