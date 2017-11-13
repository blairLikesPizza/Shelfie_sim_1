import React, { Component } from 'react';
import './Bins.css';
import HeaderBinA1 from '../Header/HeaderBinA1.js';

class BinA1 extends Component {
    constructor(){
        super();

        this.state = {
            binName: '',
            shelfId: 0,
            itemName: '',
            itemPrice: 0.00
        }
    }

    nameChange(value){
        console.log(value)
        this.setState({
            itemName: value
        })
    }

    priceChange(value){
        console.log(value)
        this.setState({
            itemPrice: value
        })
    }

    render(){
        return(
            <div>
                <HeaderBinA1 />
                <div className="bin_info_container">
                    <div className="bin_img_container">
                        <img className="bin_img" src="http://vectorblog.org/wp-content/uploads/2013/11/Rubiks-cube-shutterstock_156575030.jpg" alt="" />
                    </div>
                    <div className="input_button_container">
                        <div className="input_bars_container">
                            <p>Name</p>
                            <input className="bin_input_name" onChange={(e) => this.nameChange(e.target.value)}/>
                            <p>Price</p>
                            <span>$</span><input className="bin_input_price" placeholder="0" onChange={(e) => this.priceChange(e.target.value)}/>
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

export default BinA1;