import React, { Component } from 'react';


class App extends Component {
  state = {
    items: [],
    item: ''
  };

  onItemChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  addItem = (e) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(
        this.state.item
      ),
      item: ''
    });
  };
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
