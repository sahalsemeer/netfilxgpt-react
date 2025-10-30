import React, { useRef, useState } from "react";
import { LOGIN_BG } from "../constants";
import Header from "../components/LoginPage/Header";
import { isValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => setIsSignIn(!isSignIn);

  const handleLoginButton = () => {
    const message = isValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!message) {
      if (!isSignIn) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode+'-'+errorMessage);
            setErrorMessage(errorCode + "" + errorMessage);
          });
      }
      return message;
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={LOGIN_BG}
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* LOGIN FORM */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white rounded-md p-8 sm:p-10"
      >
        <h1 className="font-bold text-2xl mb-4 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-slate-600 py-3 my-3 px-4 rounded"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-slate-600 py-3 my-3 px-4 rounded"
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-slate-600 py-3 my-3 px-4 rounded"
          ref={password}
        />

        <p className="text-red-500 font-semibold text-sm">{ErrorMessage}</p>

        <button
          onClick={handleLoginButton}
          className="w-full py-3 rounded bg-red-700 hover:bg-red-800 transition-all my-4 font-semibold"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          onClick={toggleSignIn}
          className="text-center text-sm sm:text-base cursor-pointer my-2 hover:underline"
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in here."}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
