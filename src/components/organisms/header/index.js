'use strict'

import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
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
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const appBarCustomStyle = {
    background: 'transparent',
    boxShadow: 'none',
    color: 'black',
    fontWeight: 'bold'
  }
  const classes = useStyles()

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' style={appBarCustomStyle}>
        <Toolbar style={{ paddingLeft: 0 }}>
          <Typography variant='h5' className={classes.title}>
            <Link to='/' className={classes.link}>
              darkcode
            </Link>
          </Typography>
          {auth && (
            <div>
              <Button color='inherit'>
                <Link to='/posts' className={classes.link}>posts</Link>
              </Button>
              <Button color='inherit'>
                <Link to='/about' className={classes.link}>about</Link>
              </Button>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'>
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to='/editor' className={classes.link}>Write</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
