import React, { Component } from "react"
import mainImage from "../../images/mainImage.jpg";
import Amplify from "aws-amplify";
import { AmplifySignIn, AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";

Amplify.configure(awsconfig)

class Landing extends Component {
    constructor() {
        super();

        this.state={
            userLogin: false
        }
    }

    componentDidMount() {
        console.log(this.props.userLogin)
        if (this.props.userLogin == true) {
            if (localStorage.getItem("jwtToken") === null && Amplify.Credentials.Auth.user !== null) {
                console.log("test2");
                localStorage.setItem("jwtToken", Amplify.Credentials.Auth.user.username);
                window.location.href = "/";
            }
        }
    }

    componentDidUpdate() {
        console.log(this.props.userLogin)
        console.log("test1")
        if (this.props.userLogin == true) {
            if (localStorage.getItem("jwtToken") === null && Amplify.Credentials.Auth.user !== null) {
                console.log("test2");
                localStorage.setItem("jwtToken", Amplify.Credentials.Auth.user.username);
                window.location.href = "/";
            }
        }
    }

    render() {
        return (
            <div className="landing">
                <div className="landing-inner">
                    <div className="container">
                        <img src={mainImage} alt="mainimage" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;