import React, {Component} from 'react';
import "../../styleSheets/servicePage.css"

let MENS_HAIR_CUT = "https://whs-service-bucket.s3.amazonaws.com/MENS_HAIR_CUT.jpg"
let MENS_PERM = "https://whs-service-bucket.s3.amazonaws.com/MENS_PERM.jpg"
let WOMENS_HAIR_CUT = "https://whs-service-bucket.s3.amazonaws.com/WOMENS_HAIR_CUT.jpg"
let WOMENS_PERM = "https://whs-service-bucket.s3.amazonaws.com/WOMENS_PERM.jpg"
let TREATMENT = "https://whs-service-bucket.s3.amazonaws.com/TREATMENT.jpg"

class ServicePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5 mb-5">
                    <div className="ml-5 row mt-5 mb-5">
                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={MENS_HAIR_CUT} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">MENS HAIR CUT</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$40</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={MENS_PERM} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">MENS PERM</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$80</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={WOMENS_HAIR_CUT} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">WOMENS HAIR CUT</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$80</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={WOMENS_PERM} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">WOMENS PERM</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$120</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={TREATMENT} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">TREATMENT</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$100</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ServicePage;