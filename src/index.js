import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import App from './App';

import { signOut } from "firebase/auth";
import { auth } from './utils/firebase';

// signOut(auth)
//   .then(() => {
//     console.log("User signed out successfully");
//   })
//   .catch((error) => {
//     console.error("Error signing out:", error);
//   });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={appStore}>
      <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
