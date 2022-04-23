import React, { Component } from "react"
import Amplify from "aws-amplify";
import awsconfig from "../../configs/awsconfig";

Amplify.configure(awsconfig)

let mainImage = "https://whs-service-bucket.s3.amazonaws.com/mainImage.jpg"


class Landing extends Component {
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