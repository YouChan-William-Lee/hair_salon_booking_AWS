import React, {Component} from 'react';
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";
import Landing from "../../components/Layout/Landing"

Amplify.configure(awsconfig)

class Login extends Component {
    state = {
        adminAccount: "youchanwilliamlee@gmail.com"
    }

    componentDidMount() {
        if (localStorage.getItem("userName")) {
            fetch(`http://localhost:8080/staff/check/${Amplify.Credentials.Auth.user.attributes.email}`).then((response) => response.json()).then(result => {
                this.setState({userAdmin: result})
            });
            if (localStorage.getItem("userName")) {
                fetch(`http://localhost:8080/staff/check/${Amplify.Credentials.Auth.user.attributes.email}`).then((response) => response.json()).then(result => {
                    this.setState({userAdmin: result})
                });

                if (localStorage.getItem("userEmail") !== this.state.adminAccount && localStorage.getItem("userSavedInDb") === null) {
                    const saveCustomer = {
                        customerEmail: localStorage.getItem("userEmail"),
                        phoneNumber: localStorage.getItem("userPhone"),
                        customerName: localStorage.getItem("userName")
                    }
                    this.props.createCustomer(saveCustomer);
                    localStorage.setItem("userSavedInDb", true);
                }
                else if (localStorage.getItem("userEmail") === this.state.adminAccount && localStorage.getItem("refresh") === null) {
                    localStorage.setItem("refresh", "Done");
                    window.location.reload();
                }
            }
        }
    }

    render() {
        localStorage.setItem("userAdmin", this.state.userAdmin)
        return (
            <div>
                {localStorage.setItem("userName", Amplify.Credentials.Auth.user.username)}
                {localStorage.setItem("userEmail", Amplify.Credentials.Auth.user.attributes.email)}
                {localStorage.setItem("userPhone", Amplify.Credentials.Auth.user.attributes.phone_number)}
                {window.location.href = "/"}
            </div>
        );
    }
}
export default withAuthenticator(Login);