import React from 'react';

import Button from '@material-ui/core/Button';
import { Google } from 'mdi-material-ui';
import { connect } from 'react-redux';
import {signIn, signOut} from './actions';

//This is the Google Oauth API configuration URL: https://console.developers.google.com/apis/credentials?project=livestream-authentication&folder
class GoogleAuth extends React.Component {

    

    componentDidMount(){          
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '909775465141-7hvm63trb1os21uu9c3g6ba8fc9oshob.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onChangeAuth(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onChangeAuth);                
            });
        });
    }  

    //Call action creator
    onChangeAuth = (isSignedIn) => {        
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
       
    };

    //Event handlers functions for sign in/out
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

        if (this.props.isSignedIn === null  ) { 
            return null;
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn };
};


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);