import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
    constructor() {
        super();

        this.state = {
            allStaff: [],
            test: []
        };
    }

    componentDidMount() {
        if (localStorage.getItem("userAdmin") === "false" || localStorage.getItem("userAdmin") === null)
            window.location.href = "/";
        fetch("http://ec2-54-162-125-71.compute-1.amazonaws.com:8080/staff/allstaff").then((response) => response.json()).then(result => { this.setState({ allStaff: result }) });
    }

    componentDidUpdate() {
        if (localStorage.getItem("refresh_AddStaff") === null) {
            localStorage.setItem("refresh_AddStaff", "Done");
            fetch("http://ec2-54-162-125-71.compute-1.amazonaws.com:8080/staff/allstaff").then((response) => response.json()).then(result => { this.setState({ test: result }) });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h1 className="display-4 text-center">Staff</h1>
                        <br />
                        <br />
                        <table className="table align-center text-center w-100" align="center">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.allStaff.map(staff => (
                                <tr key={staff.id}>
                                    <td key={1}>{staff.staffId}</td>
                                    <td key={2}>{staff.staffEmail}</td>
                                    <td key={3}>{staff.staffName}</td>
                                    <td key={4}>{staff.phoneNumber}</td>
                                    <td key={5}>{staff.staffRole}</td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/addstaff"
                              className="btn btn-dark btn-lg active">
                            Add Staff
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Admin;