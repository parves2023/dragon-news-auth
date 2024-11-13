import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../firebase/firebase.config";

export const AuthContex = createContext(null);

function AuthProviders({ children }) {
  const [user, setUser] = useState(null);

  const logOut = () =>{
    
        console.log("log out successfully");
        signOut(auth);
        setUser(null);
  }
  const logIn = (email,password) =>{
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const logedUser = userCredential.user;
    console.log(logedUser);
    setUser(logedUser);
    
    // ...
  })
  .catch((error) => {
  
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });

  }

  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {

        if (currentUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          console.log(currentUser);
          setUser(currentUser);
          
          // ...
        } else {
          // User is signed out
          // ...
          console.log("no user found");
          
        }
        return ()=>{
            unSubscribe();
        }

      });
  },[])

  const createUser = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const LogedUser = userCredential.user;
        setUser(LogedUser);
        console.log(LogedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const AuthInfo = {createUser,user,logOut,logIn};

  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
}

export default AuthProviders;
