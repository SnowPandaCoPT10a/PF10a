import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../../img/logoPanda.png';
import './Profile.css'


const Profile = () => {
	 const { user,  isAuthenticated } = useAuth0();

console.log(user)
 if (isAuthenticated){
		return (

		<div>
		<img className='imgProfile' src={user.picture.length === 0 || `${Logo}` } alt='no hay imagen' />
	
			<h1>{user.name}</h1>

			<h1>{user.email}</h1>
			</div>
		)}

	return (
		<div>
		</div>
		
		
	)
}


export default Profile
