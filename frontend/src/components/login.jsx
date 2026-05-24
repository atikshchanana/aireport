import { useState } from "react"

import {
  signInWithEmailAndPassword
} from "firebase/auth"

import { auth }
from "../firebase"

function Login() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const login = async () => {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    alert("Login Successful")
  }

  return (

    <div className="p-10">

      <input
        type="email"
        placeholder="Email"
        className="border p-3"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={login}
        className="bg-blue-600 text-white px-5 py-3"
      >
        Login
      </button>

    </div>
  )
}

export default Login