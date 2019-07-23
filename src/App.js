import React, { Component } from 'react'
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Exercises from './Components/Exercises/index';
import {muscles, exercises} from './store';

export default class App extends Component {
  state = {
    exercises,
  }
  getExercisesByMuscles() {
    return (
      Object.entries(this.state.exercises.reduce((exercises,exercise) => {
          const {muscles} = exercise

          exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

          return exercises
        },{})
      )
    )
  }



  render() {
    const exercises = this.getExercisesByMuscles();
    
    return (
      <div>
        <Header/>
        <Exercises
          exercises = {exercises}
        />
        <Footer
          muscles={muscles}
        />
      </div>
    )
  }
}
