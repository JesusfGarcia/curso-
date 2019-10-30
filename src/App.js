import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './Components/Saludo'
import {
  Col,
  Row,
  Input,
  Button,
  Container 
} from 'reactstrap'

class App extends Component {
  state = {
    name: '',
    array:[1,2,3,4,5,6,7,8,9],
  }
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  borrartodo = () => {
    this.setState({
      name: '',
     
    })
  }

  render() {
    return (
      <div >
        <Container style={{height:'100vh'}}>
        <img src={logo} className="App-logo" alt="logo"/>
         
          <Saludo name={this.state.name}/>
        </Container>
          
      </div>
    );
  }

}

export default App;
