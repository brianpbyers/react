// hello world component...
import React from 'react'
class MoodTracker extends React.Component{
    constructor(props) {
      super(props)
      this.state = { points: 1 }
    }
  
    increaseMood() {
      let newPoints = this.state.points >= 10 ? 1 : this.state.points + 1
      this.setState({
        points: newPoints
      })
    }
    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
          <p>On a scale of 1-10</p>
          <p>You are {this.props.mood}</p>
          <p>This much: {this.state.points}</p>
          <button onClick={this.increaseMood.bind(this)}>Up Your Mood!</button>
        </div>
      )
    }
  }

export default MoodTracker