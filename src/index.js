import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import  store  from './store';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
     {/* <AuthProvider > */}
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
      </BrowserRouter>
    {/* </AuthProvider> */}
  </React.StrictMode>,
);