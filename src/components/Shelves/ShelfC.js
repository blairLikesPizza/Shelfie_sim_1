import React, { Component } from 'react';
import './Shelf.css';
import HeaderShelfC from '../Header/HeaderShelfC.js';
import { Link } from 'react-router-dom';

class ShelfC extends Component {
    render() {
        return (
            <div>
                <HeaderShelfC />
                <div className="bin_link_container">
                    <Link to="/bins/binC1"><p>Bin 1</p></Link>
                    <Link to="/bins/binC2"><p>Bin 2</p></Link>
                    <Link to="/bins/binC3"><p>Bin 3</p></Link>
                    <Link to="/bins/binC4"><p>Bin 4</p></Link>
                    <Link to="/bins/binC5"><p>Bin 5</p></Link>
                </div>
            </div>
        )
    }
}

export default ShelfC;