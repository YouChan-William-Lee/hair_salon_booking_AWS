import React, {Component} from 'react';

class Profile extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    componentDidMount() {
        if (localStorage.getItem("userName") === null)
            window.location.href = "/";
    }

    render() {
        return (
            <div>
                {localStorage.getItem("userName") !== null && (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Profile</h1>
                            <br/>
                            <br/>
                            <table className="table align-center text-center w-50" align="center">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>name</td>
                                        <td>{localStorage.getItem("userName")}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Email</td>
                                        <td>{localStorage.getItem("userEmail")}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Phone Number</td>
                                        <td>{localStorage.getItem("userPhone")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}

export default Profile;