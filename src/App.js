import React from 'react';
import { createStore } from 'redux'
import UsernameInput from './components/username-input';
import PasswordInput from './components/password-input';
import {strengthIndicator} from './components/password-input/strength';
import RetypePasswordInput from './components/retype-password-input';
import StrengthDiv from './components/strength-div';
import MatchedDiv from './components/matched-div';

class App extends React.Component{
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			retypePassword: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event, attr) { 
		const newState = { ...this.state };
		newState[attr] = event.target.value;
		this.setState( newState );
	}

	handleSubmit(event) {
		/*if (this.state.password === this.state.retypePassword && this.state.retypePassword !== '' && strengthIndicator(this.state.password) > 3 && this.state.username !== '') {
			alert('Welcome ' + this.state.username + ' !');
			ReactDOM.render(<Welcome />, document.getElementById('root'));
		}else{
			alert('Password is unvalid or password re-typed not match password !');
		}*/
		let password = this.state.password;
		let retypePassword = this.state.retypePassword;
		let username = this.state.username;
		function validationPassword(state = '', action){
			if(password === retypePassword && retypePassword !== '' && strengthIndicator(password) > 3 && username !== ''){
				action.type = 'OK'
			}
			switch (action.type) {
				case 'OK':
				  state = 'Welcome ' + username + ' !'
				  return state
				default:
				  state = 'Password is unvalid or password re-typed not match password !'
				  return state
			  }
		}

		let store = createStore(validationPassword)
		alert (store.getState())
		event.preventDefault();

	}
	
	render() {
		return (
			<div id="container">
				<div id="block-form">
					<img src="img/logo-Izberg.png" alt="logo-Izberg"/>
					<h2>Join us at Izberg !</h2>
					<form
						action=''
						method='get'
						onSubmit={this.handleSubmit}
					>
						<label>Username</label>
						<UsernameInput
							value={this.state.username}
							placeholder="Enter your username"
							handleChange={(e) => this.handleChange(e, 'username')}
						/>
						<label>Password</label>
						<PasswordInput
							value={this.state.password}
							placeholder="Enter your password"
							handleChange={(e) => this.handleChange(e, 'password')}
						/>
						<label>Re-type password</label>
						<RetypePasswordInput
							retypePassword={this.state.retypePassword}
							placeholder="Re-type your password"
							handleChange={(e) => this.handleChange(e, 'retypePassword')}
							password={this.state.password}
						/>
						<input 
							type="submit" 
							value="Sign in" 
							className="submit-button" 
						/>
					</form>
					<StrengthDiv password={this.state.password} id="strength-div"></StrengthDiv>
					<MatchedDiv password={this.state.password} retypePassword={this.state.retypePassword} id="matched-div"></MatchedDiv>
				</div>
			</div>
		)
	}
}

export default App;