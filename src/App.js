import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import loginImg from "./hamburger001.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="row big-row">
					<div className="col-2"></div>
					<div className="login-container col-8">
						<div>
							<img className="loginImage" src={loginImg} alt="" />
						</div>

						<div className="form-header">
							<h3 className="login-header">LOGIN</h3>
							<a href="//#endregion" className="sign-up">
								NEW USER? SIGN UP
							</a>
						</div>

						<div className="form">
							<div className="login-fill">
								<div className="username-fill">
									<input
										type="text"
										placeholder="Email or User Name"
										className="form-input"
									/>
									<div className="icon envelope-icon">
										<FontAwesomeIcon icon={faEnvelope} size="2x" />
									</div>
								</div>
								<div className="username-fill phone-fill">
									<input
										type="text"
										placeholder="Phone Number"
										className="form-input"
									/>
									<div className="icon envelope-icon">
										<FontAwesomeIcon icon={faPhone} size="2x" />
									</div>
								</div>
								<div className="password-fill">
									<input
										type="password"
										placeholder="Password"
										className="form-input"
									/>
									<div className="icon lock-icon">
										<FontAwesomeIcon icon={faLock} size="2x" />
									</div>
								</div>
							</div>
							<div>
								<button type="button" className="btn">
									Login
								</button>
							</div>
							<div className="accompanying-text">
								<input
									type="checkbox"
									className="forget-password"
									name="terms"
								/>
								<label for="terms" className="term">
									{" "}
									Accept Terms and Condition
								</label>
								<div className="social-icon">
									<FontAwesomeIcon
										icon={faFacebook}
										className="userIcon facebookIcon"
									/>
									<FontAwesomeIcon
										icon={faGoogle}
										className="userIcon googleIcon"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
