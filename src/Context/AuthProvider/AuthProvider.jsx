import React, { useEffect, useState } from 'react'
import { AuthCon } from '../AuthContex/AuthCon'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase/firebase.auth'

const AuthProvider = ({children}) => {
  const [user , setUser]= useState(null)
    const createUser = (email , password) => {
       return createUserWithEmailAndPassword(auth , email , password)
    }
    const signIn = (email , password)=> {
      return signInWithEmailAndPassword (auth , email , password)
    }
    const authInfo = {
        createUser : createUser ,
        signIn : signIn ,
        user : user , 
    }

    useEffect (()=> {
   const unsubscribe = onAuthStateChanged (auth , (currentUser)=> {
        console.log(currentUser)
        setUser(currentUser)
      })
      return ()=> {
        unsubscribe ()
      }
    } , [])
  return (
    <AuthCon value={authInfo}> 
    {children}
    </AuthCon>
  )
}

export default AuthProvider