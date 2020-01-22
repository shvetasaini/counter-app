import React, { Component } from "react";

class Counter extends Component {
  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  addBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.addBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.deleteCounter(this.props.counter.id)}
          className="btn btn-danger btn-sm mr-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
