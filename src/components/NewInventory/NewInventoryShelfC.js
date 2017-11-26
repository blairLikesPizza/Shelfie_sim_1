import React, { Component } from 'react';
import './NewInventory.css';
import NewInventoryHeaderShelfC from '../Header/NewInventoryHeaderShelfC.js';
import axios from 'axios';

class NewInventoryShelfC extends Component {
    constructor(props){
        super(props);

        this.state = {
            binName: 'Bin' + this.props.match.params.id[1],
            shelfId: 'Shelf ' + this.props.match.params.id[0],
            itemName: '',
            itemPrice: 0.00
        }
        this.nameChange = this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.addToInventory = this.addToInventory.bind(this);
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

    addToInventory(){
        axios.post('/api/bin/:id')
             .then((response) => {
                 console.log(response)
             })
    }

    render() {
        return (
            <div>
                <NewInventoryHeaderShelfC id={this.props.match.params.id[1]}/>
                <div className="new_inventory_root">

                    <div className="new_inventory_container">

                        <p>Name</p>
                        <input className="new_inventory_name_input" onChange={(e) => this.nameChange(e.target.value)}/>
                        <p>Price</p>
                        <span>$</span><input className="new_inventory_price_input" placeholder="0" onChange={(e) => this.priceChange(e.target.value)}/>
                        <button className="add_to_inventory_button" onClick={this.addToInventory}>+ Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewInventoryShelfC;