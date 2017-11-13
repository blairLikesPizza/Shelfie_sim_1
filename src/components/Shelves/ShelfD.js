import React, { Component } from 'react';
import './Shelf.css';
import HeaderShelfD from '../Header/HeaderShelfD.js';
import { Link } from 'react-router-dom';

class ShelfD extends Component {
    render() {
        return (
            <div>
                <HeaderShelfD />
                <div className="bin_link_container">
                    <Link to="/bins/binD1"><p>Bin 1</p></Link>
                    <Link to="/bins/binD2"><p>Bin 2</p></Link>
                    <Link to="/bins/binD3"><p>Bin 3</p></Link>
                    <Link to="/bins/binD4"><p>Bin 4</p></Link>
                    <Link to="/bins/binD5"><p>Bin 5</p></Link>
                </div>
            </div>
        )
    }
}

export default ShelfD;