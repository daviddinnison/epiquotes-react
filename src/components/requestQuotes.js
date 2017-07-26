import React from 'react';

export default function requestQuotes(props) {
  return 	<button onClick={e => props.revealQuotes(e)} 
    className="find-quotes">give me quotes!</button>;
}