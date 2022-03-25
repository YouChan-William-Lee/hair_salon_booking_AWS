import React, { Component } from 'react'
import "../../App.css";

class Footer extends Component {
    render() {
        return (
            <div className="theFooter mt-3">
                <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark mb-0 mt-4">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav ml-auto footSpacings">
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutus">
                                        ABOUT US
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactus">
                                        CONTACT US
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Footer;