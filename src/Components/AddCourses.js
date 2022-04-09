import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class AddCourses extends Component {
    state={
        courseTitle:"",
        courseDescription:"",
        courseDate:"",
        courseDuration:"",
        courseVenue:""
    }
    onHandle=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onRead=()=>{
        console.log(this.state);
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
            (response)=>{
                console.log(response);
                if(response.data.status==="success"){
                    alert("Added Sucessfully")
                }
                else {
                    alert("Something went wrong")
                }
            })
    }
  render() {
    return (
      <div>
          <Grid container style={{padding:55}}>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='Enter Name' fullWidth variant='outlined' margin='normal' name='courseTitle' onChange={this.onHandle}/>

              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='Enter Description' fullWidth variant='outlined' margin='normal' name='courseDescription' onChange={this.onHandle}/>

              </Grid>
              <Grid style={{padding:5}} item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='Enter Date' fullWidth type='date' variant='outlined' margin='normal' name='courseDate' onChange={this.onHandle}/>

              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='Enter Duration' fullWidth variant='outlined' margin='normal' name='courseDuration' onChange={this.onHandle}/>

              </Grid>
              <Grid style={{padding:5}} item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='Enter Venue' fullWidth variant='outlined' margin='normal' name='courseVenue' onChange={this.onHandle}/>

              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Button onClick={this.onRead} variant='contained' fullWidth color='secondary'>Submit</Button>

              </Grid>
          </Grid>
      </div>
    )
  }
}
