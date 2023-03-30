import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'

const Login = () => {

	const { loginWithRedirect } = useAuth0();

	return (
		<div>
			<button className='buttonLog' onClick={() => loginWithRedirect()}>
				<b className='login'>Log In</b>
				<div id="clip">
					<div id="leftTop" class="corner"></div>
					<div id="rightBottom" class="corner"></div>
					<div id="rightTop" class="corner"></div>
					<div id="leftBottom" class="corner"></div>
				</div>
				<span id="rightArrow" class="arrow"></span>
				<span id="leftArrow" class="arrow"></span>
			</button>
		</div>
	)
}



export default Login