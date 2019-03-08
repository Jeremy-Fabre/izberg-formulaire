import React from 'react';
import UsernameInput from './components/username-input';
import PasswordInput from './components/password-input';
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
	}
	
	handleChange(event, attr) { 
		const newState = { ...this.state };
		newState[attr] = event.target.value;
		this.setState( newState );
		//console.log(newState.username)
	}

	handleSubmit(event) {
		alert('Welcome');
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