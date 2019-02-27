import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
 apiKey: '379b5a6366f64c9e9a36ac7c9d2f2f42'
});

const particlesOptions = {
                particles: {
                  number: {
                    value: 40,
                    density: {
                      enable: true,
                      value_area: 400
                    }
                }
              }
            }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log("click");
        app.models
    .predict(
    Clarifai.COLOR_MODEL,
        // URL
        "https://samples.clarifai.com/metro-north.jpg"
    )
    .then(function(response) {
        console.log(response);
        },
        function(err) { // there was an error
        }
    );
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles'
      params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
