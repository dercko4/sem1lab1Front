import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import UserStore from './store/userStore'
import UserRequest from './store/userRequest';
export let Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      userRequest: new UserRequest()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);