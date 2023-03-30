import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Logout.css'


const Logout = () => {

	const { logout } = useAuth0();

	return (
		<div>
			<button className='btnLogout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
				<b className='login'>Log out</b>
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



export default Logout