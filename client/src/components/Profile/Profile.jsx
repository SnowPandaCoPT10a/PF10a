import { React, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../../img/logoPanda.png';
import { useDispatch } from 'react-redux'
import './Profile.css'
import { createNewUser, updateUser } from '../../Redux/actions/index.js'



const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const dispatch = useDispatch();
	const [userCreated, setUserCreated] = useState(false);
	const [editFormState, setEditFormState] = useState({
		first_name: '',
		last_name: '',

		nationality: "",
		date_birth: "",
		mobile: "",
		image: "",


	});
	console.log(user)
	const [isEditing, setIsEditing] = useState(false);


	const handleEditClick = () => {
		setIsEditing(true);
	}

	const handleInputChange = (event) => {
		setEditFormState({
			...editFormState,
			[event.target.name]: event.target.value
		});
	}
	const handleEditSubmit = (event) => {
		event.preventDefault();
		dispatch(updateUser(editFormState))
		alert("usuario cambiado correctamente");
		// Agrega aquí la lógica para actualizar la información en tu base de datos
		setEditFormState({
			first_name: '',
			last_name: '',

			nationality: "",
			date_birth: "",
			mobile: "",
			image: "",
		})
		setIsEditing(false);
	}



	useEffect(() => {
		if (isAuthenticated && user && !userCreated) {
			dispatch(createNewUser(
				user.family_name,
				user.given_name,
				user.email,
				user.picture
			));
			setUserCreated(true);
		}
	}, [isAuthenticated, user, dispatch, userCreated]);
	if (isAuthenticated) {
		if (isEditing) {
			return (

				<form onSubmit={handleEditSubmit}>
					<br />
					<img className='imgProfile' src={user.picture ? user.picture : `${Logo}`} alt='no hay imagen' />
					<h1>Name: {user.family_name}</h1>
					<h1>Last Name: {user.given_name}</h1>
					<h1>Email: {user.email}</h1>
					<label >
						<input type="text" name="first_name" placeholder="...Name" value={editFormState.first_name} onChange={handleInputChange} />
					</label>
					<label>
						<input type="text" name="last_name" placeholder="...Last name" value={editFormState.last_name} onChange={handleInputChange} />
					</label>
					<label>
						<label>
							Nationality:
							<input type="text" name="nationality" placeholder="...Nationality" value={editFormState.nationality} onChange={handleInputChange} />
						</label>
						Mobile:
						<input type="text" name="mobile" placeholder="...Mobile" value={editFormState.mobile} onChange={handleInputChange} />
					</label>
					<label>
						Birthday:
						<input type="date" name="date_birth" value={editFormState.date_birth} onChange={handleInputChange} />
					</label>
					<label>
						<input type="text" name="image" placeholder="...image" value={editFormState.image} onChange={handleInputChange} />
					</label>
					<button type="submit" onClick={(e) => handleEditSubmit(e)}>Guardar cambios</button>
				</form>
			)
		}

		return (

			<div className='profilecont'>
				<img className='imgProfile' src={user.picture ? user.picture : `${Logo}`} alt='no hay imagen' />

				<h1>{user.name}</h1>
				<h1>{user.email}</h1>

				<button onClick={handleEditClick}>Editar información</button>
			</div>
		)
	}

	return (
		<div>
		</div>


	)
}


export default Profile