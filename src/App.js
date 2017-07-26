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
  // revealQuotes(quotes) {
  //   console.log('executing reveal quotes');
  //   this.setState({
  //     quotes
  //   });
  // }

  render() {
    const quotes = this.props.quotes; 
    
    // console.log(props.quotes + ' --------APP.JS ----');
    //console.log(this.state.quotes + 'state quotes');
    return (
    console.log(quotes),
    <div className="container">
        <Header/>
        <UserPost/>
        <Default quotes={quotes}/>
        {/* <Default banana={this.revealQuotes}/> */}
        {/* <div>{this.state.quotes && this.props.quotes.forEach(function(item)      
          {return (
            <section class = "quote">
      <p>{item.quote}</p>
      <p>{item.source}</p>
      <p class= "quote-tag-style">{item.tag}</p>
	    </section>)
          })

        }</div> */}
    </div>
    )
  }
}

export default App;
