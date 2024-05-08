import React,{useContext, useState} from 'react'
import Login from '../components/Login'
import Siginup from '../components/Siginup'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { MainContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmWpXbijs-n6KweGoRAQeVHWymmntzgRk",
  authDomain: "blogapp-4fe78.firebaseapp.com",
  projectId: "blogapp-4fe78",
  storageBucket: "blogapp-4fe78.appspot.com",
  messagingSenderId: "653487995363",
  appId: "1:653487995363:web:2ea39373729601ae1048d6",
  measurementId: "G-WELPSB6N1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export default function User() {
  const [toggle, setToggle] = useState(true);
  const [error, setError] = useState(true);
  const navigator = useNavigate();
 const {notify} =useContext(MainContext)


  const createAccount = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem("user",JSON.stringify(user));
        navigator("/");
        console.log(user)
        notify('Account created successfully');
        setError(false);
        setToggle(true);
        // ...
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        notify(errorMessage);
        setError(true);
        // ..
      });
  }




  const loginWithGoogle=()=> {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        navigator("/");
        notify("Login Succesfully")
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        notify = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }



  const loginHandler=(data)=> {
    if( data.email=="" || data.password==""){
      alert('Please enter a value!');
    }else{
     
      signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential)
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        notify('Login successfull');
        navigator("/");
        setError(false);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        notify(errorMessage)
        setError(true);

      });
    }
  

  }


  
  return (
    <>
    {
toggle == true ?
<Login setToggle={setToggle} loginHandler={loginHandler} loginWithGoogle={loginWithGoogle}/>
:
<Siginup setToggle={setToggle} loginWithGoogle={loginWithGoogle} createAccount={createAccount} />
    }
    </>
  )
}
