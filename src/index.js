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
  apiKey: "AIzaSyB14T0U1e3UAB6fy5HrlhUj-ZC-pXwUmg8",
  authDomain: "ecommerce-ldb-dfcc1.firebaseapp.com",
  projectId: "ecommerce-ldb-dfcc1",
  storageBucket: "ecommerce-ldb-dfcc1.appspot.com",
  messagingSenderId: "661911737105",
  appId: "1:661911737105:web:8f673faed1a909e50ff2b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>;
<script src="sweetalert2.all.min.js"></script>;
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
