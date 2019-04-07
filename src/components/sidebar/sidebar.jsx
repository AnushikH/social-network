import React, { Component } from 'react';
import sidebar from './sidebar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className ="bg-dark p-4 h-100">
                <ul className={sidebar.menuItem} >
                    <li><NavLink to="/profile" className="text-white">Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className="text-white">Message</NavLink></li>
                    <li><a href="" className="text-white">News</a></li>
                    <li><a href="" className="text-white">Music</a></li>
                    <li><a href="" className="text-white">Setting</a></li>
                </ul>
            </div>
         );
    }
}
 
export default Sidebar;