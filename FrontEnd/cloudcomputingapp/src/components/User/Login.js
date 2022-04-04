import React, {Component} from 'react';
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";
import Landing from "../../components/Layout/Landing"

Amplify.configure(awsconfig)

class Login extends Component {


    render() {
        return (
            <div>
                {localStorage.setItem("userName", Amplify.Credentials.Auth.user.username)}
                {localStorage.setItem("userEmail", Amplify.Credentials.Auth.user.attributes.email)}
                {localStorage.setItem("userPhone", Amplify.Credentials.Auth.user.attributes.phone_number)}
                {window.location.href="/"}
            </div>
        );
    }
}
export default withAuthenticator(Login);