import { React, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../img/logoPanda.png";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { searchUser, updateUser } from "../../Redux/actions/index.js";
import { getAllUsers } from "../../Redux/actions/index";
import Swal from "sweetalert2";

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const dispatch = useDispatch();
	var datoUsuario = useSelector(e => e.user)
  
	const [editFormState, setEditFormState] = useState({
		first_name: '',
		last_name: '',
		nationality: "",
		date_birth: "",
		mobile: "",
		image: "",
		address: "",
		
	});
	const [editFormErrors,setEditFormErrors ] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let errors = { ...editFormErrors };
    console.log(editFormState)

    
		  switch (name) {
        case 'first_name':
          if (!/^[a-zA-ZÀ-ÿ]+$/.test(value)) {
            errors.first_name = 'Invalid name';
          } else {
            delete errors.first_name;
          }
          break;
          case 'last_name':
            if (!/^[a-zA-ZÀ-ÿ]+$/.test(value)) {
              errors.last_name = 'Invaled Lastname';
            } else {
              delete errors.last_name;
            }
            break;
            case 'nationality':
              if (!/^[a-zA-Z\s]+$/.test(value)) {
                errors.nationality = 'Invalid nacionality';
              } else {
                delete errors.nationality;
              }
              break;
              case 'date_birth':
                if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                  const currentDate = new Date();
                  const parsedDate = value;
                  
                  if (parsedDate > currentDate) 
                    {errors.date_birth = 'Date cannot be further than today'};
                    delete errors.date_birth;
                } else {
                  errors.date_birth = 'Date cannot be further than today'
                }
                break;
                case 'mobile':
                  if (!/^\d{0,10}$/.test(value)) {
                    errors.mobile = 'Invalid Phone Number';
                  } else {
                    delete errors.mobile;
                  }
                  break;
	
                  case "image":
                  if (!/^https:\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)?$/.test(value)) {
                    errors.image = "Invalid image URL";
                  } else {
                    delete errors.image;
                  }
                  break;
                  case 'address':
                    if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
                      errors.address = 'Invalid address';
                    } else {
                      delete errors.address;
                    }
                    break;

			// Agregar más casos según los campos que tenga el formulario
		  }
      setEditFormErrors(errors);
      setIsSubmitDisabled(Object.keys(errors).length > 0);
      
      setEditFormState({
        ...editFormState,
        [name]: value,
      });
    ;
    




    
  };
  const handleEditSubmit = (event) => {
    event.preventDefault();
   /* if (
      !editFormState.first_name &&
      !editFormState.last_name &&
      !editFormState.nationality &&
      !editFormState.date_birth &&
      !editFormState.mobile &&
      !editFormState.image &&
      !editFormState.address  ) {
      alert("No se ha modificado ninguna información");
      setIsEditing(false);
    }
    /*		let errors = {};
if (!/^[a-zA-Z\s]+$/.test(editFormState.nationality)) {
errors.nationality = "Nacionalidad inválida";
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(editFormState.date_birth)) {
errors.date_birth = "Fecha inválida";
}
if (!/^\d{0,10}$/.test(editFormState.mobile)) {
errors.mobile = "Número de teléfono inválido";
}
if (!/^(ftp|http|https):[^ "]+$/.test(editFormState.image)) {
errors.image = "URL de imagen inválida";
}
if (!/^[a-zA-Z\s]{2,}$/.test(editFormState.first_name)) {
	errors.first_name = "Nombre inválido";
	}
	if (!/^[a-zA-Z\s]{2,}$/.test(editFormState.last_name)) {
	errors.last_name = "Apellido inválido";
	}
	if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(editFormState.email)) {
	errors.email = "Email inválido";
	}*/
	
    dispatch(updateUser(user.email, {...editFormState }));
    //dispatch(searchUser({ email: user.email }))

    // Agrega aquí la lógica para actualizar la información en tu base de datos
    setEditFormState({
      first_name: "",
      last_name: "",
      email: user.email,
      nationality: "",
      date_birth: "",
      mobile: "",
      image: "",
      address: "",
    });
    /*Swal.fire({
      title: "¡Updated user!",
      icon: "success",
    });*/
    
    setIsEditing(false);
    setTimeout(function() {
      location.reload();
    }, 3000);
    Swal.fire({
      title: "¡Updated user!",
      icon: "success",
    });
    
  };
  try {
    if (isAuthenticated) {
      const perfiles = Object.values(datoUsuario)
      
      const perfil = perfiles?.find((obj) => obj.email === user.email);
      
      if (isEditing) {
        return (
          <form className="profile-form" onSubmit={handleEditSubmit}>
            <br />
            <img
              className="imgProfile"
              src={perfil.image ? perfil.image : `${Logo}`}
              alt="no hay imagen"
            />
            <h1 className="h1profile">Name: {perfil.first_name}</h1>
            <h1 className="h1profile">Last Name: {perfil.last_name}</h1>
            <h1 className="h1profile">Email: {perfil.email}</h1>
            
            
            
            <label className="profile-label">
              <input
                required
                className="inputprofile"
                type="text"
                name="first_name"
                placeholder="...Name"
                value={editFormState.first_name}
                onChange={handleInputChange}
              />{editFormErrors.first_name && (
                <p className="error">{editFormErrors.first_name}</p>
            )}
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="last_name"
                placeholder="...Last name"
                value={editFormState.last_name}
                onChange={handleInputChange}
              />
              {editFormErrors.last_name && (
                <p className="error">{editFormErrors.last_name}</p>
            )}
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="nationality"
                placeholder="...Nationality"
                value={editFormState.nationality}
                onChange={handleInputChange}
              />
              {editFormErrors.nationality && (
                <p className="error">{editFormErrors.nationality}</p>
            )}
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="mobile"
                placeholder="...Mobile"
                value={editFormState.mobile}
                onChange={handleInputChange}
              />
              {editFormErrors.mobile && (
                <p className="error">{editFormErrors.mobile}</p>
            )}
            </label>
            <label>
              <input
                className="inputprofile"
                type="date"
                name="date_birth"
                value={editFormState.date_birth}
                onChange={handleInputChange}
              />
               {editFormErrors.date_birth && (
                <p className="error">{editFormErrors.date_birth}</p>
            )}
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="address"
                value={editFormState.address}
                placeholder="...Adress"
                onChange={handleInputChange}
              />
                {editFormErrors.address && (
                <p className="error">{editFormErrors.address}</p>
            )}
            </label>
            <label>
              <input
                className="inputprofile"
                type="text"
                name="image"
                placeholder="...Profile Picture"
                value={editFormState.image}
                onChange={handleInputChange}
              />
            </label>

            {
              !editFormState.image &&
              !editFormState.address && 
              !editFormState.date_birth &&
              !editFormState.mobile &&
              !editFormState.nationality &&
              !editFormState.last_name &&
              !editFormState.first_name 
            
            ? null :
            
           ( <button

              className="buttoneditar"
              type="submit"
              disabled={isSubmitDisabled}
              onClick={(e) => handleEditSubmit(e)}
            >
              Guardar cambios
            </button>)
            
            }

            
          </form>
        );
      }
      return (
        <div className="profilecont">
       
      
          <img
            className="imgProfile"
            src={perfil.image ? perfil.image : `${Logo}`}
            alt="no hay imagen"
          />
          <h1 className="h1profile">Name: {perfil.first_name}</h1>
          <h1 className="h1profile">Last Name: {perfil.last_name}</h1>
          <h1 className="h1profile">Birthday: {perfil.date_birth}</h1>
          <h1 className="h1profile">Nationality: {perfil.nationality}</h1>
          <h1 className="h1profile">Mobile Phone: {perfil.mobile}</h1>
          <h1 className="h1profile">Email: {perfil.email}</h1>
          <h1 className="h1profile">Address: {perfil.address}</h1>

          <button className="buttoneditar"   onClick={handleEditClick} >
            Editar información
          </button>
         
        </div>
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export default Profile;
