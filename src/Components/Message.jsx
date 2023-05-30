import "./message.css";
import React from 'react';

export default function Message({ message }) {
  return (
    <>
    
      {
        message.map(msg => {
        let msgsender= msg.sender.self
          return (
            <>
            <div className="ooo">
              
            <div className="message">
              <div id={msg.id} className="messageTop">
                <img className="messageImg" src={msg.sender.image} />
                <p className="messageText">{msg.message}</p></div>
              <div className="messageBottom"></div>
            </div>
            </div>
            <div style={{ display:"flex", marginRight:"0px"}}>
            <div className="messageown" style={{display:"flex",alignItems:"flex-end", textAlign:"right"}}>
            <div id={msg.id} >
              
              <p className="messageText1">{msg.message}</p></div>
            <div className="messageBottom"></div>
          </div>
          </div>
        </>
          )
        })
      }

    
    </>
  );
}
