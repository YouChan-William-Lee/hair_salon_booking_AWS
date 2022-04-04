import React, {Component} from 'react';
import Amplify from "aws-amplify";
import { withAuthenticator, AmplifyAuthenticator ,AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";

Amplify.configure(awsconfig)

class Logout extends Component {
    render() {
        return (
            <div>
                <AmplifyAuthenticator>
                    <h1>Do you really want to log out?</h1>
                    <AmplifySignOut />
                    {localStorage.clear()}
                    {window.location.href="/"}
                </AmplifyAuthenticator>
            </div>
        );
    }
}

export default Logout;