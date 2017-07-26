import React from 'react';
import Header from './components/header';
import UserPost from './components/userPost';
import Default from './components/default.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="container">
        <Header/>
        <UserPost/>
        <Default />
    </div>
    );
  }
}

export default App;
