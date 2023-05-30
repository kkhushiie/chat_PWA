import React, { useState } from 'react';
import "./footer.css"
const Footer = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSendClick = () => {
    setInputValue('');
  };

  return (
    <div className='div1'>
    <div className='div2'>
      <input className='box' type="text" placeholder='Reply to @John Doe' value={inputValue} onChange={handleInputChange} />
      <button className = 'button' onClick={handleSendClick}>Send</button>
    </div>
    </div>
  );
};

export default Footer;
