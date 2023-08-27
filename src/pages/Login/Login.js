import React from 'react';
import './Login.css';

function Login() {
	return (
		<div className="login-container">
			<div className="form-container">
				<div className="left-section">
					<h1>Log In</h1>
					<form className="form form-group">
						<input
							className="form-control username"
							type="text"
							placeholder="Username"
						/>
						<input
							className="password form-control"
							type="password"
							placeholder="Password"
						/>
						<button className="submit-button btn btn-danger" type="submit">
							Log In
						</button>
					</form>
				</div>
				<div className="center-section">OR</div>
				<div className="right-section">
					<button
						className="submit-button-facebook btn btn-danger"
						type="submit"
					>
						Log in with Facebook
					</button>
					<button
						className="submit-button-twitter btn btn-danger"
						type="submit"
					>
						Log in with Twitter
					</button>
					<button className="submit-button-google btn btn-danger" type="submit">
						Log in with Google+
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
