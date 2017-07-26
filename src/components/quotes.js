import React from 'react';

export default function Quotes() {
      quotes.forEach(function (item) {
    let quote= item.quote;
    let source= item.source;
    let tag= item.tag;
    let html = `
    <section class = "quote">
      <p>"${quote}"</p>
      <p>-${source}</p>
      <p class= "quote-tag-style">${tag}</p>
	  </section>`;
  $(".all-quotes").append(html);
    return html;  
  })
}