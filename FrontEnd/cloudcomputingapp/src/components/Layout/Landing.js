import React, { Component } from "react"
import mainImage from "../../images/mainImage.jpg";

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