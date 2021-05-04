import React from 'react';
import './Signin.css';

class Signin extends React.Component {

    constructor(props){
        super(props);
        this.state={
            signInEmail : '',
            signInPassword :''
        }

    }

    onEmailChange =(event) =>{
        this.setState({signInEmail : event.target.value})
    }
    onPasswordChange =(event) =>{
        this.setState({signInPassword : event.target.value})
    }
    onSubmitSignIn =() =>{
        fetch('http://localhost:3030/signin',{
            method :'POST',
            headers:{'Content-Type':'application/json'},
            body :JSON.stringify({
                email:this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user=>{
            if(user){
                this.props.loadUser(user);
                this.props.onRouteChange('profile');
            }
        })
        
    }



     render(){
    return (
        <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent  hover-black w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-black w-100" type="password" name="password"  id="password"/>
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    onClick={this.onSubmitSignIn}
                    value="Sign in"/>
                </div>

            </div>
         </main>
      
      );
}
  
}

export default Signin;
