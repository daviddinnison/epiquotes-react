import React from 'react';
import ShowQuotes from './showQuotes.js'

export default function Default() {
    return( 
     <main className= "default">
			  <button className="add-quotes">Add my quote now!</button>
			  <form action="/#" id="find-by-source">
				  <fieldset>
					  <select id="list-tags">
						    <option>show me...</option>
						  <option value="funny">funny</option>
						  <option value="inspirational">inspirational</option>
						  <option value="pop-culture">pop-culture</option>
						  <option value="life">life</option>
						  <option value="relationships">relationships</option>
					  </select>
					<button type="button" className="find-tags-search"> search </button>
					<hr/>
					<ShowQuotes />
				</fieldset>
			  </form>
      </main>
    )
}
