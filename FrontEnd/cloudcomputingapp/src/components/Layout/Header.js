import React, { Component } from 'react'
import profileImage from '../../images/profileImage.png'
import jwt_decode from "jwt-decode";

class Header extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            isUserLoggedIn: false,
            isUserAdmin: false
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            const decoded_token = jwt_decode(token)

            if (decoded_token.username) {
                this.setState({ isUserLoggedIn: true })
                this.setState({ username: decoded_token.username })
                if (decoded_token.userRole == "ADMIN") {
                    this.setState({ isUserAdmin: true })
                }
            } else {
                this.setState({ isUserLoggedIn: false })
            }
        } else {
            this.setState({ isUserLoggedIn: false })
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">
                        {/* Left  of the Nvaigation Bar */}
                        <ul className="nav navbar-nav pull-sm-left">
                            <li className="nav-item">
                                {this.state.isUserLoggedIn && (
                                    <a className="navbar-brand" href="/profile">
                                        <img src={profileImage} width="50" height="50" className="rounded-circle"></img>
                                    </a>)}
                            </li>
                        </ul>

                        {/* Centre of the navigation bar */}
                        <ul className="nav navbar-nav navbar-logo mx-auto">
                            <li className="nav-item">
                                <a className="navbar-brand adminNavBar" href="/">
                                    Will's hair salon
                                </a>
                            </li>
                        </ul>

                        {/* Right of the navigaton bar */}
                        <ul className="navbar-nav ml-auto">
                            {!this.state.isUserLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link " href="/register">
                                        Sign Up
                                    </a>
                                </li>)}
                            {!this.state.isUserLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">
                                        Login
                                    </a>
                                </li>)}
                            {this.state.isUserLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/booking">
                                        Booking
                                    </a>
                                </li>)}
                            {this.state.isUserLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/calendar">
                                        Calander
                                    </a>
                                </li>)}
                            {this.state.isUserLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/logout">
                                        Logout
                                    </a>
                                </li>)}
                            {this.state.isUserAdmin && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin">
                                        Admin
                                    </a>
                                </li>)}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;