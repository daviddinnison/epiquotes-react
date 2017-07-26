import React from 'react';
import Header from './components/header';
import UserPost from './components/userPost';
import Default from './components/default.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }
  revealQuotes(input) {
    this.setState({
      input
    })
  }

  render() {
     console.log(this.props.quotes);
    return (
    <div className="container">
        <Header/>
        <UserPost/>
        <Default />
    </div>
    )
  }
}

export default App;
