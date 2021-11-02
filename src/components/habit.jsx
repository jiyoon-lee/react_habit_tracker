import React, { Component } from 'react';

class Habit extends Component {
  // state ={
  //   count: 0,
  // }
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }
  // handleDerement = () => {
  //   const count = this.state.count - 1
  //   this.setState({ count: count < 0 ? 0 : count })
  // }
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`)
  }
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }
  handleDerement = () => {
    this.props.onDecrement(this.props.habit)

  }
  handleDelete = () => {
    this.props.onDelete(this.props.habit)

  }
  render() {
    const { name, count } = this.props.habit;
    return <>
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDerement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </>
  }
}

export default Habit;