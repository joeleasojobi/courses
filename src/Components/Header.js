import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography>Course</Typography>
                  <NavLink style={{padding:20, color:"#00FFFF"}} to='/'>Add Courses</NavLink>
                  <NavLink style={{padding:20, color:"#00FFFF"}} to='/viewcourses'>View Courses</NavLink>
              </Toolbar>
          </AppBar>
      </div>
    )
  }
}
