'use strict'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: ['Montserrat', 'sans-serif'],
    fontSize: '1.75rem',
    fontWeight: 'bold'
  },
  subtitle: {
    flexGrow: 1,
    alignSelf: 'flex-end'
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  }
}))

export default function Header () {
  const [auth, setAuth] = useState(true)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    showUserName(); 
  }, [])
    
  const appBarCustomStyle = {
    background: 'transparent',
    boxShadow: 'none',
    color: 'black',
    fontWeight: 'bold'
  }
  const classes = useStyles()

  const handleLogout = () => {
    localStorage.clear();
  };

  const showUserName = () => {
    const user = localStorage.getItem('user');
console.log(JSON.parse(user));

    return setUserName(user.name);
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' style={appBarCustomStyle}>
        <Toolbar style={{ paddingLeft: 0 }}>
          <Typography variant='h5' className={classes.title}>
            <Link to='/' className={classes.link}>
              toDoit
            </Link>
          </Typography>
          {auth && (
            <div>
              <Button color='inherit'>
                <Link to='/projects' className={classes.link}>
                  Projects
                </Link>
              </Button>
              <Button color='inherit'>
                <Link to='/' onClick={handleLogout} className={classes.link}>
                  Logout
                </Link>
              </Button>

              <span className={classes.link}> {userName} </span>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
