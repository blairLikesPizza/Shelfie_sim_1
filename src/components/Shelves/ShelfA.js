import React, { Component } from 'react';
import './Shelf.css';
import HeaderShelfA from '../Header/HeaderShelfA.js';
import { Link } from 'react-router-dom';

class ShelfA extends Component {
    render() {
        return (
            <div>
                <HeaderShelfA />
                <div className="bin_link_container">
                    <Link to="/bins/binA1"><p>Bin 1</p></Link>
                    <Link to="/bins/binA2"><p>Bin 2</p></Link>
                    <Link to="/bins/binA3"><p>Bin 3</p></Link>
                    <Link to="/bins/binA4"><p>Bin 4</p></Link>
                    <Link to="/bins/binA5"><p>Bin 5</p></Link>
                </div>
            </div>
        )
    }
}

export default ShelfA;