"use client"
// ? import { useState } from "react"
// ** importing dependencies
import { auth, googleAuth } from "../config/firebase"
import { signInWithPopup, signOut } from "firebase/auth"

const Auth = () => {
  const SignInWithGoogle = async () => {
    try{
      signInWithPopup(auth, googleAuth)
    }
    catch (err){
      console.error(err)
    }
  }
  const SignOut = async () => {
    try{
      signOut(auth)
    }
    catch(err){
      console.error(err)
    }
  }
  return (
    <section>
      <button onClick={SignInWithGoogle}>
        Sign in With Google
      </button>
      <img src={String(auth.currentUser?.photoURL)} alt="" props/>
      <button onClick={SignOut}>
        Sign Out
      </button>
    </section>
  )
}

export default Auth