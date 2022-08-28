import React from 'react';
import quote from './quote.json'

const Author = ({number}) => {
  return (
    <div>
      <h3>{quote[number].author}</h3>
    </div>
  );
};

export default Author;