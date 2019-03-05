import React from 'react';
import UsernameInput from './components/username-input';
import PasswordInput from './components/password-input';
import RetypePasswordInput from './components/retype-password-input';

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
							value={this.state.retypePassword}
							placeholder="Re-type your password"
							handleChange={(e) => this.handleChange(e, 'retypePassword')}
						/>
						<input type="submit" value="Sign in" className="submit-button" />
					</form>
				</div>
			</div>
			)
	}
}

export default App;