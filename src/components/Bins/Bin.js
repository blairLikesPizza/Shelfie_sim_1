import React, { Component } from 'react';
import './Bins.css';
import HeaderBinsA from '../Header/HeaderBinsA.js';
import HeaderBinsB from '../Header/HeaderBinsB.js';
import HeaderBinsC from '../Header/HeaderBinsC.js';
import HeaderBinsD from '../Header/HeaderBinsD.js';
import axios from 'axios';


class Bin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            binName: 'Bin' + this.props.match.params.id[1],
            shelfId: 'Shelf ' + this.props.match.params.id[0],
            itemName: '',
            itemPrice: 0.00
        }
        this.updateBin = this.updateBin.bind(this);
        this.updateHeader = this.updateHeader.bind(this);
        this.updateButtons = this.updateButtons.bind(this);
    }

    componentDidMount() {
        this.updateHeader()
        this.updateButtons()
    }

    nameChange(value) {
        console.log(value)
        this.setState({
            itemName: value
        })
    }

    priceChange(value) {
        console.log(value)
        this.setState({
            itemPrice: value
        })
    }

    updateBin() {
        axios.put('/api/bin/' + this.state.id, this.state)
            .then((response) => {
                console.log(response)

            })
    }

    updateHeader() {
        if (this.state.shelfId === 'Shelf A') {
            return <HeaderBinsA id={this.props.match.params.id} />
        }
        if (this.state.shelfId === 'Shelf B') {
            return <HeaderBinsB id={this.props.match.params.id} />
        }
        if (this.state.shelfId === 'Shelf C') {
            return <HeaderBinsC id={this.props.match.params.id} />
        }
        if (this.state.shelfId === 'Shelf D') {
            return <HeaderBinsD id={this.props.match.params.id} />
        }
    }

    updateButtons() {
            return <button className="save_button" onClick={this.updateBin}>Save</button>
        }


    render() {
        return (
            <div>
                {this.updateHeader()}
                <div className="bin_info_container">
                    <div className="bin_img_container">
                        <img className="bin_img" src="http://vectorblog.org/wp-content/uploads/2013/11/Rubiks-cube-shutterstock_156575030.jpg" alt="" />
                    </div>
                    <div className="input_button_container">
                        <div className="input_bars_container">
                            <p>Name</p>
                            <input className="bin_input_name" onChange={(e) => this.nameChange(e.target.value)} />
                            <p>Price</p>
                            <span>$</span><input className="bin_input_price" placeholder="0" onChange={(e) => this.priceChange(e.target.value)} />
                        </div>
                        <div className="bin_button_container">
                            <button className="edit_button" onClick={this.updateButtons}>Edit</button>
                            <button className="delete_button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bin;