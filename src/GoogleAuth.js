import React from 'react';

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
                this.setState({isSignedIn: this.auth.isSignedIn.get() })
            });
        });

    }  

    renderLoginState() {
        if (this.state.isSignedIn === null) {
            return <div>No se kaon</div>;
        } else if (this.state.isSignedIn) {
            return <div>a wiful ya estoy in</div>;
        } else {
            return <div>estoy fuera de la cura</div>;
        }
    }
    
    render(){
        return(<div>{this.renderLoginState()}</div>);
    }
}

export default GoogleAuth;