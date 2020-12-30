import React from "react";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import GetUserToken from "./GetUserToken";

const PostUser = () => {
    const {user, isAuthenticated} = useAuth0();
    if (isAuthenticated) {
        const userData = {
            name: user.name,
            sportsCategory: "KMS",
            horsemanStatus: "ADULT",
            clientToken: GetUserToken(user.sub)
        };
        const postUrl = "http://localhost:8080/clients"

        axios.post(postUrl, userData);
    }
    return null
}

export default PostUser;