import React, { Component } from 'react';
import logo from '../../images/logo.png'


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid bg-dark">
                <div className="col-lg-12 row mx-0">
                    <div className="col-lg-3 py-4">
                        <img src={logo} className="w-75" alt=""/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;