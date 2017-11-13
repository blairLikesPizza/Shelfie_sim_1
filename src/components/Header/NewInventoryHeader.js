import React, { Component } from 'react';
import './NewInventoryHeader.css';
import { Link } from 'react-router-dom'

class NewInventoryHeader extends Component {
    render() {
        return (
            <div className="bin_header_root">
              <Link to="/shelves/shelfA">
                <div className="bin_header_container">
                    <Link to="/"> <div className="bin_logo_container">
                        <img className="bin_header_logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png" alt="" />
                    </div>
                    </Link>
                    <p>Shelf A</p>
                </div>
                </Link>
                <p>Add to Bin 1</p>
            </div>
        )
    }
}
export default NewInventoryHeader