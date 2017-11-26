import React, { Component } from 'react';
import './NewInventoryHeader.css';
import { Link } from 'react-router-dom'

class NewInventoryHeaderShelfC extends Component {
    constructor(props){
        super(props);

        this.state = {
            shelfId: "Shelf C",
            binId: this.props.id
        }
    }

    render() {
        return (
            <div className="bin_header_root">
              <Link to="/shelfC">
                <div className="bin_header_container">
                    <Link to="/"> <div className="bin_logo_container">
                        <img className="bin_header_logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png" alt="" />
                    </div>
                    </Link>
                    <p>{this.state.shelfId}</p>
                </div>
                </Link>
                <p>Add to Bin {this.state.binId}</p>
            </div>
        )
    }
}
export default NewInventoryHeaderShelfC;