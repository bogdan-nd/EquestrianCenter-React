function GetUserToken(name) {
    return name.replace("auth0|", "")
}

export default GetUserToken;