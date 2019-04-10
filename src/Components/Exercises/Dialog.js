import React, {Component, Fragment} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Form from './Form'
import { exercises } from '../../store';

export default class extends Component {
  state = {
    open: false

  };
  
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFromSubimit = exercise => {
    this.handleToggle()

    this.props.onCreate(exercise)
  }

  render() {
    const {open} = this.state,
          {muscles} = this.props
          
    
    return <Fragment>
      <Fab color="primary" onClick={this.handleToggle} size="small" >
        <AddIcon />
      </Fab>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle id="form-dialog-title">
            Create a new Exercise
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Please fill out the form bellow.
            </DialogContentText>
            <Form 
              muscles={muscles}
              onSubmit={this.handleFromSubimit}
            />
            </DialogContent>
          </Dialog>
        </Fragment>
  }
}



