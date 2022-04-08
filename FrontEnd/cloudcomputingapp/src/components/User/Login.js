import React, {Component} from 'react';
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";

Amplify.configure(awsconfig)

class Login extends Component {
    state = {
        adminAccount: "youchanwilliamlee@gmail.com"
    }

    componentDidMount() {
        if (localStorage.getItem("userName")) {
            if (localStorage.getItem("userEmail") !== this.state.adminAccount && localStorage.getItem("userSavedInDb") === null) {
                const saveCustomer = {
                    customerEmail: localStorage.getItem("userEmail"),
                    phoneNumber: localStorage.getItem("userPhone"),
                    customerName: localStorage.getItem("userName")
                }
                localStorage.setItem("userSavedInDb", true);
                this.props.createCustomer(saveCustomer);
            }
            else if (localStorage.getItem("userEmail") === this.state.adminAccount && localStorage.getItem("refresh") === null) {
                localStorage.setItem("refresh", "Done");
                window.location.reload();
            }
        }
    }

    render() {
        const saveCustomer = {
            customerEmail: localStorage.getItem("userEmail"),
            phoneNumber: localStorage.getItem("userPhone"),
            customerName: localStorage.getItem("userName")
        }
        return (
            <div>
                {localStorage.setItem("userName", Amplify.Credentials.Auth.user.username)}
                {localStorage.setItem("userEmail", Amplify.Credentials.Auth.user.attributes.email)}
                {localStorage.setItem("userPhone", Amplify.Credentials.Auth.user.attributes.phone_number)}
                {localStorage.getItem("userEmail") === this.state.adminAccount && localStorage.setItem("userAdmin", true)}
                {window.location.href = "/"}
            </div>
        );
    }
}
export default withAuthenticator(Login);