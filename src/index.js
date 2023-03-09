import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import './assets/css/plugins.css';
<<<<<<< HEAD
import './assets/css/custom.css';
import './App.css';


=======
import './App.css';
>>>>>>> cc95be3fb363e236efcc84e0bf570dca210a12cd
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
