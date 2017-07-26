import React, { Component } from 'react';
import Header from './components/header';
import UserPost from './components/userPost';
import AllQuotes from './components/allQuotes';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="container">
        <Header/>
        <UserPost/>
        <AllQuotes/>
    </div>
    );
  }
}

export default App;
