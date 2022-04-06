import React, { Component } from 'react';
import profileImage from '../../images/profileImage.png';
import jwt_decode from "jwt-decode";
import { Amplify, Auth } from "aws-amplify";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";

Amplify.configure(awsconfig)

class Header extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            isUserLoggedIn: false,
            isUserAdmin: false,
            popUpOn: false
        };
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
    }

    componentDidMount() {
        if (localStorage.getItem("userName")) {
            this.setState({ isUserLoggedIn: true })
            console.log(localStorage.getItem("userAdmin"));
            if (localStorage.getItem("userAdmin") === "true") {
                this.setState({ isUserAdmin: true })
            }
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
                                        <img src={profileImage} width="50" height="50" className="rounded-circle" alt="profile" />
                                    </a>)}
                            </li>
                        </ul>

                        <ul className="nav navbar-nav pull-sm-left">
                            <li className="nav-item">
                                {this.state.isUserLoggedIn && (
                                    <a className="navbar-brand" href="/profile">
                                        {localStorage.getItem("userName")}
                                    </a>)}
                            </li>
                        </ul>

                        {/* Centre of the navigation bar */}
                        <ul className="nav navbar-nav navbar-logo mx-auto">
                            <li className="nav-item">
                                <a className="navbar-brand adminNavBar" href="/">
                                    William Hair Salon
                                </a>
                            </li>
                        </ul>

                        {/* Right of the navigaton bar */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/booking">
                                    Booking
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/service">
                                    Service
                                </a>
                            </li>
                            {!this.state.isUserLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">
                                        Login
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