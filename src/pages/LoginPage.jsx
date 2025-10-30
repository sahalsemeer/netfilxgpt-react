import React, { useRef, useState } from "react";
import { LOGIN_BG } from "../constants";
import Header from "../components/LoginPage/Header";
import { isValidate } from "../utils/validate";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLoginButton = () => {
    const message = isValidate(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    // const auth = getAuth();
    // createUserWithEmailAndPassword(
    //   auth,
    //   email.current.value,
    //   password.current.value
    // )
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG} alt="" />
      </div>

      {/* LOGIN */}
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute p-18 bg-black/70 text-white w-4/12 my-36 mx-auto right-0 left-0 rounded-sm h-130"
      >
        <h1 className="font-bold text-white text-2xl mb-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-slate-500 py-3 my-3 px-4"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full bg-slate-500 py-3 my-3 px-4"
          ref={email}
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full bg-slate-500 py-3 my-6 px-4"
          ref={password}
        />
        <p className="font-bold text-red-700">{ErrorMessage}</p>
        <button
          onClick={handleLoginButton}
          className="w-full py-4 px-4 rounded-sm bg-red-700 my-4 "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignIn} className="cursor-pointer my-4">
          {isSignIn
            ? "New to Netflix?Sign up now."
            : "Alredy a User?Sign in here."}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
