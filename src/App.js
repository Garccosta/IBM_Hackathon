import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
 
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value:120,
      density: {
        enable: true,
        value_area: 600
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      }
    }
  }
};
const initialState = {
  input: '',
  route : 'signIn',
  isSignedIn: false,
  user: {
      id: '',
      name:'',
      email: '',
      joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    const { id, name, email, entries, joined } = data;
    this.setState({user:{
      id,
      name,
      email,
      entries,
      joined
    }})
  }

  
  onInputChange = (event) => {
      this.setState({ input: event.target.value });
    };


  onRouteChange = (route) => {
    if (route === 'signOut'){
      this.setState(initialState);
    } else if ( route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange} />
        { route === 'signIn' ?
          <SignIn loadUser = {this.loadUser} onRouteChange = {this.onRouteChange} /> 
        : 
          <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
        }

        </div>
    );
  } 
} 


export default App;
