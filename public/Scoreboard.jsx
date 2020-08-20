import React, { Component } from 'react'

export class Scoreboard extends Component {
  state = {
    score: 0,
  }
  handleClickAddToScore = () => {
    const newScore = this.state.score + 1
    this.setState({ score: newScore + 1 })
    console.log('click')
  }

  handleClickSubtractFromScore = () => {
    const newScore = this.state.score - 1
    this.setState({ score: newScore })
    console.log('click')
  }

  render() {
    return (
      <section className="team1">
        <h2>{this.props.teamName}</h2>
        <h3>{this.state.score}</h3>
        <fieldset>
          <input type="text" placeholder="Name" />
        </fieldset>

        <fieldset>
          <i
            onClick={this.handleClickAddToScore}
            className="add fas fa-2x fa-plus-circle"
          ></i>

          <i
            onClick={this.handleClickSubtractFromScore}
            className="subtract fas fa-2x fa-minus-circle"
          ></i>
        </fieldset>
      </section>
    )
  }
}
