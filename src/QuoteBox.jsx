import React, { useState } from 'react'
import quote from './quote.json'
import './Quote.css'
import Author from './Author';



const QuoteBox = () => {

  const colors=["#845EC2","#00ffff","#8a2be2","#dc143c","#9acd32","#008080"]
  const randomColor=Math.floor(Math.random()*colors.length)


  document.body.style=`background:${colors[randomColor]}`
  
  

  const [number,setNumber]=useState(Math.floor(Math.random()*quote.length))

  const change=()=>{
    setNumber(Math.floor(Math.random()*quote.length))
   }

  return (
    <div className='card' style={{color:colors[randomColor]}}>
      <h1>{quote[number].quote}</h1>
      <Author number={number}/>
      <button onClick={change} style={{background:colors[randomColor]}}>
        <i className="fa-solid fa-shuffle"></i>
        </button>
    </div>
  );
};

export default QuoteBox;