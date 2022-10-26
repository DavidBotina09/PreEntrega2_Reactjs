import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1cfN1w9x0-ENQnhcAMzt_io55JQaDhH8",
  authDomain: "tienda-de-deportes-a3605.firebaseapp.com",
  projectId: "tienda-de-deportes-a3605",
  storageBucket: "tienda-de-deportes-a3605.appspot.com",
  messagingSenderId: "678533583525",
  appId: "1:678533583525:web:ca7fd335bc0383c52f334c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
