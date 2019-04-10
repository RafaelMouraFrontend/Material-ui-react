import React from 'react'
import { AppBar, Tabs } from '@material-ui/core'
import { Tab, withWidth } from '@material-ui/core'


export default withWidth()(
  ({muscles, category, onSelect, width}) => {
    const index = category ? 
    muscles.findIndex(group => group === category) + 1 : 0

    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : muscles[index - 1])



    return   <AppBar position='static'>
    <Tabs 
      value={index} 
      onChange={onIndexSelect}
      indicatorColor="secondary" 
      textColor="secondary" 
      centered={width !== 'xs'}
      scrollable={width === 'xs'}
    >
      
      <Tab label="All" />
      {muscles.map(group => (
        <Tab label={group} />
      ))}
    </Tabs>
  </AppBar>
  }
)


