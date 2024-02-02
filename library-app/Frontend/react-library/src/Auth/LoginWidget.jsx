import { useOktaAuth } from "@okta/okta-react"
import { SpinnerLoading } from "../layouts/Utils/SpinnerLoading";
import { Redirect } from "react-router-dom";
import OktaSigninWidget from "./OktaSignInWidget";


const LoginWidget = ({ config }) => {
    
    const {oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log("Signin Error: ", err);
    }

    if(!authState){
        return (
            <SpinnerLoading/>
        )
    }

    return authState.isAuthenticated ?
        <Redirect to={{ pathname: "/" }} />
        :
        <div>
            <OktaSigninWidget config={config} onSuccess={onSuccess} onError={onError} />
        </div>
}

export default LoginWidget;