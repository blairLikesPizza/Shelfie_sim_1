import React, { Component } from 'react';
import './Bins.css';
import HeaderBinsA from '../Header/HeaderBinsA.js';
import HeaderBinsB from '../Header/HeaderBinsB.js';
import HeaderBinsC from '../Header/HeaderBinsC.js';
import HeaderBinsD from '../Header/HeaderBinsD.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

// 42H
class Bin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 42J, 42K
            binName: 'Bin' + this.props.match.params.id[1],
            shelfId: 'Shelf ' + this.props.match.params.id[0],
            itemName: '',
            itemPrice: 0.00,
            edit: false,
        }
        this.updateBin = this.updateBin.bind(this);
        this.updateHeader = this.updateHeader.bind(this);
        this.allowEdit = this.allowEdit.bind(this);
        this.disableEdit = this.disableEdit.bind(this);
        this.saveButtonHandler = this.saveButtonHandler.bind(this);
        this.deleteBin = this.deleteBin.bind(this);
        this.getBin = this.getBin.bind(this);
    }
// 39C, 44E
    componentDidMount() {
        this.updateHeader()
        this.getBin()
    }

    allowEdit() {
        this.setState({
            edit: true
        })
    }

    disableEdit() {
        this.setState({
            edit: false
        })
    }

    getBin() {
        // 44C, 44D
        axios.get('/api/bin/' + this.props.match.params.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    binName: response.data[0].binname,
                    shelfId: response.data[0].shelfid,
                    itemName: response.data[0].itemname,
                    itemPrice: response.data[0].itemprice
                })
            })
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
// 36D, 36E
    updateBin() {
        axios.put('/api/bin/' + this.props.match.params.id, this.state)
            .then((response) => {
                console.log("update response", response)
                this.setState({
                    binName: response.data[0].binname,
                    shelfId: response.data[0].shelfid,
                    itemName: response.data[0].itemname,
                    itemPrice: response.data[0].itemprice
                })

            })
    }

    deleteBin() {
        axios.delete('/api/bin/' + this.props.match.params.id, this.state)
            .then((response) => {
                console.log(response)
            })
    }

    saveButtonHandler() {
        this.updateBin()
        this.disableEdit()
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

// 36F
    render() {

        let binInfo;
        if (this.state.edit) {
            binInfo = (
                // 36G
                <div className="bin_info_container">
                    <div className="bin_img_container">
                        <img className="bin_img" src="http://vectorblog.org/wp-content/uploads/2013/11/Rubiks-cube-shutterstock_156575030.jpg" alt="" />
                    </div>
                    <div className="input_button_container">

                        <div className="input_bars_container">
                            <p>Name</p>
                            <input value={this.state.itemName} className="bin_input_name" onChange={(e) => this.nameChange(e.target.value)} />
                            <p>Price</p>
                            <span>$</span><input value={this.state.itemPrice} className="bin_input_price" placeholder="0" onChange={(e) => this.priceChange(e.target.value)} />
                        </div>
                        <div className="bin_button_container">
                            <button className="save_button" onClick={this.saveButtonHandler}>Save</button>
                            <Link to={"/shelf" + this.props.match.params.id[0]}><button className="delete_button" onClick={this.deleteBin}>Delete</button></Link>
                        </div>
                    </div>
                </div>
            )

        } else {
            binInfo = (
                <div className="bin_info_container">
                    <div className="bin_img_container">
                        <img className="bin_img" src="http://vectorblog.org/wp-content/uploads/2013/11/Rubiks-cube-shutterstock_156575030.jpg" alt="" />
                    </div>
                    <div className="input_button_container">


                        <div className="input_bars_container_noedit">
                            <div className="bin_input_name_noedit_header">Name</div>
                            <div className="bin_input_name_noedit">{this.state.itemName}</div>
                            <div className="bin_input_price_noedit_header">Price</div>

                            <span>$</span><div className="bin_input_price_noedit">{this.state.itemPrice}</div>
                        </div>
                        <div className="bin_button_container_noedit">
                            <button className="edit_button" onClick={this.allowEdit}>Edit</button>
                            <Link to={"/shelf" + this.props.match.params.id[0]}><button className="delete_button" onClick={this.deleteBin}>Delete</button></Link>
                        </div>
                    </div>
                </div>
            )

        }
        return (
            <div>
                {this.updateHeader()}
                {binInfo}
            </div>
        )
    }
}

export default Bin;