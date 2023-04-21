import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../img/logoPanda.png";
import Login from "../Login/Login.jsx";
import Logout from "../Logout/Logout.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/actions/index";
import { createContext } from "react";
import { BsFillCircleFill, BsFillMoonFill, BsThreeDotsVertical } from "react-icons/bs";
import ReactSwitch from "react-switch";

const Header = ({
  navigateToCategory,
  categories,
  countProducts,
  theme,
  setTheme,
  toggleTheme,
}) => {
  const location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const datos = useSelector((e) => e.user);
  const { isAuthenticated, isLoading, user } = useAuth0();

  let ancho = window.screen

  let perfil = null;

  try {
    perfil = datos.filter((obj) => obj.email === user.email); // estoy matcheadn que el email de aut0 este en  la base de datos 

  } catch (error) {
    console.log('Esperando datos');
  }
  let isAdmin = null;

  try {
    isAdmin = datos.filter((obj) => obj.email === user.email && obj.privilige === true);

  }
  catch (error) {
    console.log('Esperando datos');
  }



  const [dropActive, setDropActive] = useState(false);
  const [dropNavResponsive, setDropNavResponsive] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <div></div>
      </div>
    );
  }

  function handleClick() {
    navigate(-1);
  }

  const rutaUrl = window.location.href;

  const isProductCategoryPage = categories.some(
    (category) => location.pathname === category.path
  );

  const scrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="cntHeader">
      <Link to={"/"} onClick={() => scrollTop()}>
        <img src={Logo} alt="" className="imgLogo" />
      </Link>
      <div className="ps-5 d-flex flex-row justify-content-around align-items-center w-75">
        {/* {isProductCategoryPage && <SearchBar categories={categories} />} */}
        <div>
          {location.pathname !== "/" && <SearchBar categories={categories} />}
        </div>


        <Link to={"/Shop"} onClick={() => scrollTop()}>
          <button
            className={rutaUrl.includes("Shop") ? "btnHome active" : "btnHome"}
          >
            Shop
          </button>
        </Link>



        {!rutaUrl.includes("Shop") && !rutaUrl.includes("Products") ?
          <>
            <a href="/#AboutUs" className="btnRedirectHome">
              About Us
            </a>
            <a href="/#OurValues" className="btnRedirectHome">
              Our Values
            </a>
            <a href="/#contacto" className="btnRedirectHome">
              Contact Us
            </a>
          </>
          :
          <>
            <a href="/Shop#categoria" className="btnRedirectHome">
              Categorias
            </a>
            <a href="/Shop#marcas" className="btnRedirectHome">
              Marcas
            </a>
          </>}

        {!isAuthenticated ? (
          <Login />
        ) : (
          <div
            onMouseOver={() => setDropActive(true)}
            onMouseOut={() => setDropActive(false)}
          >
            <button
              className={
                rutaUrl.includes("User")
                  ? "btnUser active border border-white"
                  : "btnUser"
              }
            >
              <FaUserAlt />
            </button>

            <div className={dropActive ? "drop-active" : "drop-null"}>
              {dropActive ?
                <>
                  <Link to="/User" className="text-decoration-none">
                    <a>My Profile</a>
                  </Link>
                  <a className="dropdown-item" href="/ProfileBills">
                    My Purchases
                  </a>
                  <a className="dropdown-item" href="/ProfileReview">
                    My Reviews
                  </a>
                  <a>
                    <Logout />
                  </a>
                  {isAdmin?.length ?

                    <div>
                      <button className="button-AdminManage dropdown-toggle ps-0" id="bd-versions" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                        <span className="d-none d-lg-inline">Admin Console</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end mt-0 pt-0" aria-labelledby="bd-versions">
                        <li>
                          <a className="dropdown-item text-black" href="/ManageProfiles">
                            Manage Profiles
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item text-black" href="/ManageProducts">
                            Manage Products
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item text-black" href="/ManageBills">
                            Manage Bills
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item text-black" href="/ManageReviews">
                            Manage Reviews
                          </a>
                        </li>
                      </ul>
                    </div> : null}
                </>
                : null}
            </div>
          </div>
        )}

        {!isAuthenticated ? null : (
          <div className="d-flex justify-content-between align-items-center">
            <Link to={"/ShoppingCart"}>
              <button className="btnCarrt">
                <FaShoppingCart />
                <span className="notificacionCantidad badge rounded-pill bg-danger ">
                  {countProducts}
                </span>
              </button>
            </Link>
            <div className="ms-4 ps-4 fs-1 buttonHamburgerNav" onClick={() => setDropNavResponsive(!dropNavResponsive)}>
              <BsThreeDotsVertical className="text-white" />
            </div>
          </div>
        )}




        {/* nav Resposive Drop */}
        <div className={`navResposiveDrop container-fluid py-4 ${dropNavResponsive?null:'dropNavDisable'}`}>

          <button onClick={() => setDropNavResponsive(false)} type="button" class="btn-close position-absolute btnNavDisable" aria-label="Close"></button>

          <Link to={"/Shop"} onClick={() =>{ scrollTop();setDropNavResponsive(false)}} className="text-decoration-none text-white fs-2 p-4 fw-bold">
            Shop
          </Link>
          
          {
            !rutaUrl.includes("Shop") && !rutaUrl.includes("Products") ?
              <div className="d-flex flex-column ps-4">
                <a onClick={() => setDropNavResponsive(false)} href="/#AboutUs" className="text-white mt-3">
                  About Us
                </a>
                <a onClick={() => setDropNavResponsive(false)} href="/#OurValues" className="text-white mt-3">
                  Our Values
                </a>
                <a onClick={() => setDropNavResponsive(false)} href="/#contacto" className="text-white mt-3">
                  Contact Us
                </a>
              </div>
              :
              <div className="d-flex flex-column ps-4">
                <a onClick={() => setDropNavResponsive(false)} href="/Shop#categoria" className="text-white mt-3">
                  Categorias
                </a>
                <a onClick={() => setDropNavResponsive(false)} href="/Shop#marcas" className="text-white mt-3">
                  Marcas
                </a>
              </div>
          }

          {!isAuthenticated ?
            <Login />
            :
            <div className="btn-group dropend ps-4 pt-3">
              <button type="button" className="buttonMiPerfilDropNav dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                My Profile
              </button>
              <ul className="dropdown-menu">
                <Link onClick={() => setDropNavResponsive(false)} to="/User" className="dropdown-item text-decoration-none">
                  <a>Data</a>
                </Link>
                <Link onClick={() => setDropNavResponsive(false)} className="dropdown-item" to="/ProfileBills">
                  My Purchases
                </Link>
                <Link onClick={() => setDropNavResponsive(false)} className="dropdown-item" to="/ProfileReview">
                  My Reviews
                </Link>
                <a className="dropdown-item" >
                  <Logout />
                </a>
              </ul>
            </div>
          }
          {isAdmin?.length ?
            <div className="d-block btn-group dropend ps-4 mt-3">
              <button type="button" className="buttonMiPerfilDropNav text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Admin Console
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a onClick={() => setDropNavResponsive(false)} className="dropdown-item text-black" href="/ManageProfiles">
                    Manage Profiles
                  </a>
                </li>
                <li>
                  <a onClick={() => setDropNavResponsive(false)} className="dropdown-item text-black" href="/ManageProducts">
                    Manage Products
                  </a>
                </li>
                <li>
                  <a onClick={() => setDropNavResponsive(false)} className="dropdown-item text-black" href="/ManageBills">
                    Manage Bills
                  </a>
                </li>
                <li>
                  <a onClick={() => setDropNavResponsive(false)} className="dropdown-item text-black" href="/ManageReviews">
                    Manage Reviews
                  </a>
                </li>
              </ul>
            </div>

            : null}


          <div className="ps-4 mt-3">
            {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "light"}
              offColor="#333"
              onColor="#ccc"
              onHandleColor="#000"
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    paddingRight: 2,
                    color: "white",
                  }}
                >
                  <BsFillMoonFill />
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    paddingRight: 2,
                    color: "yellow",
                  }}
                >
                  <BsFillCircleFill />
                </div>
              }
            />
          </div>

          
        </div>


        <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "light"}
            offColor="#333"
            onColor="#ccc"
            onHandleColor="#000"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  paddingRight: 2,
                  color: "white",
                }}
              >
                <BsFillMoonFill />
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  paddingRight: 2,
                  color: "yellow",
                }}
              >
                <BsFillCircleFill />
              </div>
            }
          />
        </div>
      </div>

    </div>
  );
};

export default Header;
