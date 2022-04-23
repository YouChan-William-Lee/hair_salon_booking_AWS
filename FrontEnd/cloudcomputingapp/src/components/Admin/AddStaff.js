import React, {Component} from 'react';
import { createStaff, createSalonSchedule } from "../../actions/staffActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Admin from "./Admin"
import "../../styleSheets/adminPage.css"

class AddStaff extends Component {
    constructor() {
        super();

        this.state = {
            staffEmail: '',
            staffName: '',
            phoneNumber: '',
            hairCutType: 1,
            scheduleType: 1,
            allStaff: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newStaff = {
            staffEmail: this.state.staffEmail,
            staffName: this.state.staffName,
            phoneNumber: "+" + this.state.phoneNumber,
            hairCutType: this.state.hairCutType,
            scheduleType: parseInt(this.state.scheduleType),
            staffRole: "STAFF"

        };
        const newSalonSchedule = {
            staffId: 1,
            staffName: this.state.staffName,
            staffPhoneNumber: this.state.phoneNumber,
            staffEmail: this.state.staffEmail,
            hairCutType: this.state.hairCutType,
            scheduleType: parseInt(this.state.scheduleType),
            dayOfWeek: 'MONDAY',
            isHoliday: false,
            createdDate: new Date(),
            lastModifiedDate: new Date()
        };
        this.props.createStaff(newStaff);
        this.props.createSalonSchedule(newSalonSchedule);
        localStorage.setItem("addStaffRefresh", "Done");
        window.location.href = "/admin";
    }

    componentDidMount() {
        if (localStorage.getItem("userAdmin") !== "true")
            window.location.href = "/";
        else
            fetch(process.env.REACT_APP_ADDRESS + ":8080/staff/allstaff").then((response) => response.json()).then(result => { this.setState({ allStaff: result }) });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h1 className="display-4 text-center">Add Staff</h1>
                    </div>
                    <div className="row my-5 d-flex justify-content-center">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <table className="table align-center text-center w-50" align="center">
                                <thead>
                                    <tr>
                                        <th scope="col">Category</th>
                                        <th scope="col">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    name="staffName"
                                                    onChange={this.onChange.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    name="staffEmail"
                                                    onChange={this.onChange.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    name="phoneNumber"
                                                    onChange={this.onChange.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hair Cut Type</td>
                                        <td>
                                            <select className="form-select bg-dark text-white" name="hairCutType" onChange={this.onChange}>
                                                <option value="1">Mens only</option>
                                                <option value="2">Womens only</option>
                                                <option value="3">All</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Schedule Type</td>
                                        <td>
                                            <select className="form-select bg-dark text-white" name="scheduleType" onChange={this.onChange}>
                                                <option value="1">Monday, Wednesday, Friday</option>
                                                <option value="2">Tuesday, Thursday, Saturday</option>
                                                <option value="3">Friday, Saturday, Sunday</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-center my-3">
                                <input type="submit" className="btn btn-dark btn-block mt-4" />
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        );
    }
}
AddStaff.propTypes = {
    createStaff: PropTypes.func.isRequired,
    createSalonSchedule: PropTypes.func.isRequired
}
const mapStateProps = state => ({
    errors: state.errors
})
export default connect(
    mapStateProps,
    { createStaff, createSalonSchedule }
)(AddStaff);