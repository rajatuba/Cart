import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

//firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPxg7dkfDlgC9vopln9EikK9j0vpoFjvg",
  authDomain: "cart-17498.firebaseapp.com",
  projectId: "cart-17498",
  storageBucket: "cart-17498.appspot.com",
  messagingSenderId: "472717654990",
  appId: "1:472717654990:web:4c4bd38ac1b3c56b77499f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
