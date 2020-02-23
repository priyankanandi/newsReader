import React from 'react';

//css
import '../Suggestion/Suggestion.scss';

const Suggestions = (props) => {

  return (
    <ul className='container-box'>
      {props.results.map(r => (
      <li key={r.id} className='pointer' onClick={() => props.handleSelect(r.webTitle)}>
        {r.webTitle}
      </li>
    ))}
    </ul>
  )
}

export default Suggestions;