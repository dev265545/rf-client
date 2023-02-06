import axios from 'axios';
import React, { useState } from 'react'

function LoginModal({clickactive,user,setUser}) {
    const[register,setregister] = useState(false);
    const[userName,setUserName] = useState("")
    const[signemail,setSignEmail] = useState("")
    const [signpassword,setSignPassword]= useState("")
    const [email,setEmail] = useState("")
    const [password,setPassowrd] = useState("")

    const handlelogin = ()=>{
           const databody = {
            email : email,
            password : password
           }
          axios
            .post("http://localhost:8080/users/login", databody)
            .then(function (response) {
             setUser(response.data)
             console.group(response.data)
              window.localStorage.setItem(
                "loggedinUser",
                JSON.stringify(response.data)
              );

             clickactive("home")
            })
            .catch(function (error) {
              console.log(error);
            });

            setEmail("")
            setPassowrd("")
    }
    const handlesignin= ()=>{
 const databody = {
    userName : userName,
   email: signemail,
   password: signpassword,
 };
 axios
   .post("http://localhost:8080/users/signup", databody)
   .then(function (response) {
    console.log(response.data)
     clickactive("home");
     
            setSignEmail("");
            setSignPassword("");
   })
   .catch(function (error) {
     console.log(error);
   });
    }


  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      class="  flex items-center justify-center backdrop-blur-xl  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-teal-100 rounded-lg shadow ">
          <button
            onClick={() => {
              clickactive("home");
            }}
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          {register ? (
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 ">
                SignUp to our platform
              </h3>
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => {
                      setSignEmail(e.target.value);
                    }}
                    value={signemail}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your Username
                  </label>
                  <input
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    value={userName}
                    type="name"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                    placeholder="UserName"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your password
                  </label>
                  <input
                    onChange={(e) => {
                      setSignPassword(e.target.value);
                    }}
                    value={signpassword}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                    required
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5"></div>
                  </div>
                </div>
                <button
                onClick={()=>{handlesignin()}}
                  type="submit"
                  class="w-full text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  SignIn
                </button>
              </form>
            </div>
          ) : (
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 ">
                Login in to our platform
              </h3>
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassowrd(e.target.value);
                    }}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                    required
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5"></div>
                  </div>
                </div>
                <button
                onClick={()=>{handlelogin()}}
                  type="submit"
                  class="w-full text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login to your account
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    onClick={() => {
                      setregister(true);
                    }}
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal