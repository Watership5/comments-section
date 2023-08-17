// ? importing components
import Auth from "./components/Auth"
// * importing global variables
import { auth } from "./config/firebase"

export default function Home() {
  return (
    <main className="">
      <Auth/>
      <span aria-label="username">
        {auth.currentUser?.displayName}
      </span>
      hi
    </main>
  )
}
