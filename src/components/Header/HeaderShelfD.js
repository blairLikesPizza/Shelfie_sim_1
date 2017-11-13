import React, { Component } from 'react';
import './HeaderShelf.css';
import { Link } from 'react-router-dom';

class HeaderShelfD extends Component {
    render(){
        return(
            <div className="header_shelf_container">
               <Link to="/"> <div className="shelf_logo_container">
                  <img className="shelf_header_logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png" alt="" />
                </div>
               </Link>
               <p>Shelf D</p>
            </div>
        )
    }
}
export default HeaderShelfD