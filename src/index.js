import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="test">TEST</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
