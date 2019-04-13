import React from 'react';

import Button from '@material-ui/core/Button';
import { Google } from 'mdi-material-ui';

//This is the Google Oauth API configuration URL: https://console.developers.google.com/apis/credentials?project=livestream-authentication&folder
class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    

    componentDidMount(){

          
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '909775465141-7hvm63trb1os21uu9c3g6ba8fc9oshob.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onChangeAuth);                
            });
        });
    }  

    onChangeAuth = () => {
       
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
       
    };

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderLoginState() {
        var buttonStyle = {
            backgroundColor: "#db3236",
        };

        var iconStyle = {
            paddingRight: "7px",
            fontSize: "18px"
        };

        if (this.state.isSignedIn === null) { 
            return (
                <Button variant="contained" color="secondary" style={buttonStyle}>
                    <Google style={iconStyle}/>
                    Loading..                 
                </Button>
                );
        } else if (this.state.isSignedIn) {
            return (
                <Button variant="contained" color="secondary" style={buttonStyle} onClick={this.onSignOut}>
                    <Google style={iconStyle}/>
                    Sign Out                  
                </Button>
                );
        } else {
            return (
                <Button variant="contained" color="secondary" style={buttonStyle} onClick={this.onSignIn}>
                    <Google style={iconStyle}/>
                    Sign in with Google                 
                </Button>
            );
        }
    }
    
    render(){
       

        return(
            <div>                
                    {this.renderLoginState()}                   
            </div>
            );
    }
}

export default GoogleAuth;