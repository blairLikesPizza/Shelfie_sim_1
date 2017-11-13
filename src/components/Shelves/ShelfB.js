import React, { Component } from 'react';
import './Shelf.css';
import HeaderShelfB from '../Header/HeaderShelfB.js';
import { Link } from 'react-router-dom';

class ShelfB extends Component {
    render() {
        return (
            <div>
                <HeaderShelfB />
                <div className="bin_link_container">
                    <Link to="/bins/binB1"><p>Bin 1</p></Link>
                    <Link to="/bins/binB2"><p>Bin 2</p></Link>
                    <Link to="/bins/binB3"><p>Bin 3</p></Link>
                    <Link to="/bins/binB4"><p>Bin 4</p></Link>
                    <Link to="/bins/binB5"><p>Bin 5</p></Link>
                </div>
            </div>
        )
    }
}

export default ShelfB;