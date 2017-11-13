import React, { Component } from 'react';
import './HeaderLanding.css';

class HeaderLanding extends Component {
    render() {
        return (
            <div className="header_landing_container">
                <div className="landing_logo_container">
                    <img className="landing_header_logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png" alt="" />
                    <p>SHELFIE</p>
                </div>
            </div>
        )
    }
}
export default HeaderLanding;