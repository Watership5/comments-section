// ? importing components
"use client"
import Auth from "./components/Auth"
import { auth } from "./config/firebase";
import Comment from "./components/comment";
// * importing global variables

export default function Home() {
  return (
    <main className="">
      <Auth/>
    </main>
  )
}
