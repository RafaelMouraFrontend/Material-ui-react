import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles, exercises } from '../store.js'

export default class extends Component {
  state = {
    exercises,
    
  }
  getExercisebyMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises,exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]

        return exercises
      },{})
    )
  }
  handleCategorySelected = category =>{
    this.setState({
      category
    })
  }
  render() {
    const exercises = this.getExercisebyMuscles(),
    {category} = this.state
    return (

      <Fragment>
        <Header />
        
        <Exercises 
        category={category}
        exercises={exercises}
        />

        <Footer 
        category={category}
        muscles={muscles} 
        onSelect={this.handleCategorySelected}
        />
      </Fragment>
    )
  }
}