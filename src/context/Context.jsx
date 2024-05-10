
import React, { createContext,useEffect,useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue ,set} from "firebase/database";
import { v1 as uniqueId } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainContext=createContext();

//project details  firebaseConfig

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
  const db = getDatabase(app);


export default function Context(props) {
  //state for user details store in localstrorage
  const [User, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  //state for all blogs data store and display
  const [blogs, setblogs] = useState([]);
  //loading animation state
  const [load, setload] = useState(true);


  //blog data view function
  useEffect(
      () => {
          const starCountRef = ref(db, 'blogapp');
          onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
              const json = Object.keys(data).map(
                  (k) => {
                      return {
                          id: k,
                          ...data[k]
                      }
                  }
              )
              setblogs(json);
              setload(false)
          });
      },
      []
  )

//new blog add function

  function createBlog(data) {
    const blogId = uniqueId();
    set(ref(db, 'blogapp/' + blogId), data);
    notify('New Blog Create');
  }

//notify function create
  const notify = (msg) => toast(msg);

  //scroll bottom to top function 
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Adds a smooth scrolling animation
    });
  }






  return (

    <MainContext.Provider value={{blogs,createBlog,notify,User,setUser,load,scrollToTop}}>
    {props.children}
    <ToastContainer />
    </MainContext.Provider>
  )
}


export {MainContext}