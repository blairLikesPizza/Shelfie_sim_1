import React, { Component } from 'react';
import './Bins.css';
import HeaderBinD3 from '../Header/HeaderBinD3.js';

class BinD3 extends Component {
    render(){
        return(
            <div>
                <HeaderBinD3 />
                <div className="bin_info_container">
                    <div className="bin_img_container">
                        <img className="bin_img" src="http://vectorblog.org/wp-content/uploads/2013/11/Rubiks-cube-shutterstock_156575030.jpg" alt="" />
                    </div>
                    <div className="input_button_container">
                        <div className="input_bars_container">
                            <p>Name</p>
                            <input className="bin_input_name" />
                            <p>Price</p>
                            <span>$</span><input className="bin_input_price" placeholder="0"/>
                        </div>
                        <div className="bin_button_container">
                            <button className="edit_button">Edit</button>
                            <button className="delete_button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BinD3;