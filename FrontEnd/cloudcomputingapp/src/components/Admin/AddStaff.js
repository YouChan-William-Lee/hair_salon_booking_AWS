import React, {Component} from 'react';

class AddStaff extends Component {

    componentDidMount() {
        if (localStorage.getItem("userAdmin") === "false")
            window.location.href = "/";
        else
            fetch("http://localhost:8080/staff/allstaff").then((response) => response.json()).then(result => { this.setState({ allStaff: result }) });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Add Staff</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddStaff;