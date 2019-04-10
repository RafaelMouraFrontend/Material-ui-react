import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Grid, 
        Paper, 
        Typography, 
        List, 
        ListItem, 
        ListItemText,
        ListItemSecondaryAction,
        IconButton
      } from '@material-ui/core'

import { Delete, Edit } from '@material-ui/icons'
import Form from './Form'


const styles = theme => ({
  paper: {
    padding: 20,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% -64px -48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% -56px -48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

class AutoGrid extends Component {
  render(){
    const { 
      classes, 
      exercises, 
      category, 
      onSelect,
      exercise, 
      exercise: {
        id, 
        title = 'Welcome', 
        description = 'Please select an exercise from the list on the left'
        }, 
      onDelete,
      onSelectEdit,
      editMode,
      muscles,
      onEdit
      } = this.props
      
    return (
      
        <Grid container className={classes.container}>
          <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
              {exercises.map(([group, exercises])=>
                !category || category === group
                  
                  ? <Fragment key={group}>
                      <Typography
                      variant='headline'
                      style={{textTransform: 'capitalize'}}
                      color='secondary'
                      >
                        {group}
                      </Typography>
                      <List component="ul">
                        {exercises.map(({id, title})=>
                          <ListItem 
                            key={id}
                            button
                            onClick={()=> onSelect(id)}
                          >
                          <ListItemText primary={title} />
                          <ListItemSecondaryAction>
                            <IconButton color="primary" onClick={() => onSelectEdit(id)}>
                              <Edit />
                            </IconButton>
                            <IconButton color="primary" onClick={() => onDelete(id)}>
                              <Delete />
                            </IconButton>
                          </ListItemSecondaryAction>
                          </ListItem>
                        )}            
                      </List>
                  </Fragment>
                : null
              )}
            </Paper>
          </Grid>
          <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography 
                variant="display1"
                gutterBottom
                color="secondary"
              >
                {title}
              </Typography>                
              {editMode
              ? <Form 
                key={id}
                exercise={exercise}
                muscles={muscles}
                onSubmit={onEdit}
                />
              : <Typography 
                  variant="subheading"
                  >
                    {description}
                </Typography>
              }
              
            </Paper>
          </Grid>
        </Grid>
      
    )
  }

}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AutoGrid)
