import React, {Component, Fragment} from 'react';
import { Button, TextField, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl:{
    width: 500
  }
});

class FormDialog extends Component {
  state = {
    open: false,
    exercise:{
      title:'',
      description:'',
      muscles:''
    }
  };
  
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({target: {value} }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    })
  }

  handleSubmit = () =>{
    const { exercise } = this.state
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
      exercise:{
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render() {
    const { open, exercise:{ title, description, muscles}} = this.state,
          {classes,muscles: categories} = this.props
    
    return <Fragment>
      <Fab color="primary" onClick={this.handleToggle} size="small" >
        <AddIcon />
      </Fab>

        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Create a new Exercise
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Please fill out the form bellow.
            </DialogContentText>
            <form>
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button 
              color="primary"
              variant="contained" 
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
  }
}

FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);

