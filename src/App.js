import React, { Component } from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import TourList from './Components/TourList/TourList';

class App extends Component {
  render() {
      return(
            <main>
                <NavBar />
                <TourList />
            </main>
          );
  }
}

export default App;
