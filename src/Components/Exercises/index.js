import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Grid, 
        Paper, 
        Typography, 
        List, 
        ListItem, 
        ListItemText 
      } from '@material-ui/core'


const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

function AutoGrid(props) {
  const { classes, exercises, category } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {exercises.map(([group, exercises])=>
              !category || category === group
                ? <Fragment>
                    <Typography
                    variant='headline'
                    style={{textTransform: 'capitalize'}}
                    >
                      {group}
                    </Typography>
                    <List component="ul">
                      {exercises.map(({title})=>
                        <ListItem button>
                        <ListItemText primary={title} />
                        </ListItem>
                      )}            
                    </List>
                </Fragment>
              : null
            )}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="display1">
              Welcome
            </Typography>
            <Typography 
            variant="subheading"
            style={{marginTop: 20}}
            >
              Please select an exercise from the list on the left
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AutoGrid)
