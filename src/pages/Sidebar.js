import React from 'react';
import { Link } from 'react-router-dom';
import "./side.css";

import Nav from 'react-bootstrap/Nav';

function Sidebar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
    <div className='main'>
    
        <ul>
      
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/Task">Task</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
          <li>
            <Link to="/Report">Report</Link>
          </li>
        </ul>
      </div>
      

</Nav>
  )
}

export default Sidebar