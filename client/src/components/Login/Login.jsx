import { React, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux'
import { createNewUser } from '../../Redux/actions/index.js'

require('./Login.css');



const Login = () => {


	const { loginWithRedirect, isAuthenticated, user } = useAuth0();

	const [loggedIn, setLoggedIn] = useState(false);
	const dispatch = useDispatch();


	if (isAuthenticated) {
		useEffect(() => {
			if (isAuthenticated && user && !loggedIn) {
				dispatch(createNewUser(user.email));
				setLoggedIn(true);
				/*Swal.fire({
					icon: 'success',
					title: '¡Bienvenido!',
					text: 'Te has registrado correctamente'
					});*/
			}
		}, [isAuthenticated, user, loggedIn, dispatch]);
	}
	/*const navigate = useNavigate()
	const handleLogin = () => {
		loginWithRedirect({
			redirectUri: "https://pf-10a-bhm9.vercel.app/User" // especificamos la ruta a la que queremos redirigir al usuario
		});
	};*/

	return (
		<div>
			<button className='buttonLog' onClick={loginWithRedirect}>
				<b className='login'>Log In</b>
				<div id="clip">
					<div id="leftTop" className="corner"></div>
					<div id="rightBottom" className="corner"></div>
					<div id="rightTop" className="corner"></div>
					<div id="leftBottom" className="corner"></div>
				</div>
				<span id="rightArrow" className="arrow"></span>
				<span id="leftArrow" className="arrow"></span>
			</button>
		</div>
	)
}



export default Login