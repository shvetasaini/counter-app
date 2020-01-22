import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm mr-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            deleteCounter={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
