import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Counters from './component/Counters';

class App extends Component {
  
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = deleteId => {
    const counters = this.state.counters.filter(c => c.id !== deleteId);
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() { 
    return ( 
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
        <main className="container"> 
          <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} />
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;