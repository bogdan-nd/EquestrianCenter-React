import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = "dev-1g6vwcli.eu.auth0.com";
    const clientId = "sesGqgIM6kV2hTN6IjTPbq08VUAJ4R9r";

    const history = useHistory();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
