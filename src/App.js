import React, { Component } from 'react';
import $ from 'jquery';
import Inventory from './Inventory';

class App extends Component {
  constructor(props){
    // App is a subclass. A subclass of Component
    // Therefore, we MUST incldue a super
    super(props);

  // I am special too. I AM NOT a nomral method
  // react cares about me.
  // I will run ONE time. BEFORE the first render
  }
  componentWillMount(){
    console.log("The component is about to mount")
  }

  // I am special. I AM NOT a nomral method
  // react cares about me.
  // I will run ONE time. After the first render
  componentDidMount(){
    console.log('will run')
  }



  render() {
    return (
      <div className="App">
        <div className="col-sm-12 text-center">
          <form onSubmit={this.handleSubmit}>
            <input id="searchTerm" type="text" placeholder="Search" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        <h1>Inventory</h1>
        </div>
      </div>
    );
    }
}

export default App;
