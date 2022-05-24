import React, { Component } from 'react';
import { HousesList } from './Components/HousesList';
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
      </div>
    )
  }
}
export default App;