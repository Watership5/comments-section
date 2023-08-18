"use client"
// ! importing dependencies
import { useState } from "react"
import { auth, googleAuth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, signOut, signInAnonymously } from "firebase/auth"

const Auth = () => {
  const [url, setUrl] = useState()
  const SignInWithGoogle = async () => {
    try{
      await signInWithPopup(auth, googleAuth)
      setUrl(auth.currentUser?.photoURL)
    }
    catch (err){
      console.error(err)
    }
  }
  const SignOut = async () => {
    try{
      await signOut(auth)
      setUrl("")
    }
    catch(err){
      console.error(err)
    }
  }
  const SignInAnoumously = async () => {
    try{
      await signInAnonymously(auth)
      setUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232")
    }
    catch(err){
      console.error(err)
    }
  }
  const [user] = useAuthState(auth)
  // console.log(auth.currentUser?.photoURL)
  // console.log(auth.currentUser?.uid)
  return (
    <>
        {
          user ? 
          <button onClick={SignOut}>
            Sign Out
          </button>
        :
          <div>
            <button onClick={SignInWithGoogle}>
              Sign in With Google
            </button>
            <img src={url} alt=""/>
            <button onClick={SignInAnoumously}>
              Sign in As Guest
            </button>
          </div> 
        }
    </>
  )
}

export default Auth