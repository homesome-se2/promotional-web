import React from 'react'
import './LinkBtn.css';

function LinkBtn(props) {
    return (
        <>
      <a target="_blank" rel="noopener noreferrer" href={props.src}>
      <div className="linkBtn" >
      <div className="icon">{props.icon}</div>
      <ul>
          <li><a>{props.top}</a></li>
          <li><a>{props.bottom}</a></li>
      </ul>
      
    </div>
    </a>     
        </>
    )
}

export default LinkBtn
