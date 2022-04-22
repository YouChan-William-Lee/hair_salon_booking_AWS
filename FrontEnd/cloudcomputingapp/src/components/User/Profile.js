import React, {Component} from 'react';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            bookings: []
        };
    }

    componentDidMount() {
        if (localStorage.getItem("userName") === null)
            window.location.href = "/";
        else
            fetch(process.env.REACT_APP_ADDRESS + `:8080/salon/booking/get/${localStorage.getItem("userEmail")}`).then((response) => response.json()).then(result => { this.setState({ bookings: result }) });
    }

    render() {
        return (
            <div>
                {localStorage.getItem("userName") !== null && (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Profile</h1>
                            <table className="table align-center text-center w-50 my-5" align="center">
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
                            <br />
                            <h1 className="display-4 text-center">Booking History</h1>
                            <table className="table align-center text-center w-100 my-5" align="center">
                                <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Hair Cut Type</th>
                                    <th scope="col">Staff Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.bookings && this.state.bookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td key={1}>{booking.bookingDate}</td>
                                        <td key={2}>{booking.bookingTime}</td>
                                        <td key={3}>{booking.hairCutType}</td>
                                        <td key={4}>{booking.staffName}</td>
                                    </tr>))}
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