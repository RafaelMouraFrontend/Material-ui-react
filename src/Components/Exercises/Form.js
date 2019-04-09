import React, {Component, Fragment} from 'react';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl:{
    width: 300
  }
});

class FormDialog extends Component {
  
  state = this.getInitState()
  getInitState(){

    const { exercise } = this.props

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }
  
 

  handleChange = name => ({target: {value} }) => 
    this.setState({
        [name]: value 
    })

  handleSubmit = () =>{
   
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
      
    })

    
  }

  render(){
    const { title, description, muscles } = this.state, 
    {classes, exercise, muscles: categories} = this.props

  return  <form>
    <TextField
      label="title"
      value={title}
      onChange={this.handleChange('title')}
      margin="normal"
      className={classes.FormControl}
      
    />
    <br/>
    <FormControl className={classes.FormControl}>
      <InputLabel htmlFor="muscles">
        Muscles
      </InputLabel>
      <Select
        value={muscles}
        onChange={this.handleChange('muscles')}

      >
        {categories.map(category =>
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
        )}                
      </Select>
    </FormControl>
    <br/>
    <TextField
      multiline
      rows="4"
      label="description"
      value={description}
      onChange={this.handleChange('description')}
      margin="normal"
      className={classes.FormControl}
    />
    <br/>
    <Button 
      color="primary"
      variant="contained" 
      onClick={this.handleSubmit}
    >
      {this.props.exercise ? 'Edit' : 'Create'}
    </Button>              
  </form>
  }
}

FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);