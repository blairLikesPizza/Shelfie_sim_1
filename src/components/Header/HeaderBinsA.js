import React, { Component } from 'react';
import './HeaderBin.css';
import { Link } from 'react-router-dom'

class HeaderBinsA extends Component {
    constructor(props){
        super(props);

        this.state = {
            shelfId: this.props.id[0],
            binId: this.props.id[1]
        }
    }

    render() {
         console.log(this.props.id)
        return (
            <div className="bin_header_root">
              <Link to="/shelfA">
                <div className="bin_header_container">
                    <Link to="/"> <div className="bin_logo_container">
                        <img className="bin_header_logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png" alt="" />
                    </div>
                    </Link>
                    <p>Shelf {this.state.shelfId}</p>
                </div>
                </Link>
                <p>Bin {this.state.binId}</p>
            </div>
        )
    }
}
export default HeaderBinsA