import React from 'react'
import FacebookLogin from 'react-facebook-login';
const FacebookLoginPage = () => {
    return (  
        <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        // callback={responseFacebook} 
        />
    );
}
 
export default FacebookLoginPage;