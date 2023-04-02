import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store  from "./Redux/store/index.js";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

/*const onRedirectCallback = (appState) => {
  // Redirigir al usuario a la URL deseada
  window.location.replace("http://localhost:3000/User");
};*/


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
   <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
      redirect_uri: window.location.origin
    }}
    //onRedirectCallback={onRedirectCallback}
  >
    <React.StrictMode>
          <App />
        </React.StrictMode>
        </Auth0Provider>
  </Provider>
)

reportWebVitals();
