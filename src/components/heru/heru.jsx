import React from 'react'
import './heru.css'
import dark_arrow from '../../assets/arrow16.png'

const Heru = () => {
  return (
    <div className='heru container' id='heru'>
    <div className='heru-text'>
        <h1>We Ensure better education for a better word</h1>
        <p>Our cutting edge curriculum is designed to empower students with the knownledge, skills, and experiences needed to excel in the dynamics feild of education</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
  };

export default Heru
