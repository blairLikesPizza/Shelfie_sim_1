import React, { Component } from 'react';
import './NewInventory.css';
import NewInventoryHeader from '../Header/NewInventoryHeader.js'

class NewInventory extends Component {
    render() {
        return (
            <div>
                <NewInventoryHeader />
                <div className="new_inventory_root">

                    <div className="new_inventory_container">

                        <p>Name</p>
                        <input className="new_inventory_name_input" />
                        <p>Price</p>
                        <span>$</span><input className="new_inventory_price_input" placeholder="0"/>
                        <button className="add_to_inventory_button">+ Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewInventory;