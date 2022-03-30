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
                {localStorage.setItem("jwtToken", Amplify.Credentials.Auth.user.username)}
                {window.location.href="/"}
            </div>
        );
    }
}
export default withAuthenticator(Login);