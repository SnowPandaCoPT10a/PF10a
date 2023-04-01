import { React, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../../img/logoPanda.png';
import { useDispatch } from 'react-redux'
import './Profile.css'
import { createNewUser } from '../../Redux/actions/index.js'



const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const dispatch = useDispatch();
	const [userCreated, setUserCreated] = useState(false);

	useEffect(() => {
		if (isAuthenticated && user && !userCreated) {
			dispatch(createNewUser(user.email));
			setUserCreated(true);
		}
	}, [isAuthenticated, user, dispatch, userCreated]);
	if (isAuthenticated) {
		return (

			<div className='profilecont'>
				<img className='imgProfile' src={user.picture.length === 0 || `${Logo}`} alt='no hay imagen' />

				<h1>{user.name}</h1>

				<h1>{user.email}</h1>
			</div>
		)
	}

	return (
		<div>
		</div>


	)
}


export default Profile
