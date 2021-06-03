import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncreament = () => {
    this.props.onIncreament(this.props.habit.name);
  };

  handleDecreament = () => {
    this.props.onDecreament(this.props.habit.name);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit.name);
  };

  render() {
    console.log(this.props.habit);
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncreament}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecreament}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;