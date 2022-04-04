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
            userLogin: false,
            userAdmin: false
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