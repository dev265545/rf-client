/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from "../assets/websitelogo.png"
import { useState } from 'react';

function Navbar({clickactive,active, user,setUser}) {
 const [ LoginModal,setLoginModal] = useState(false)
  console.log("nav",user)
  const clicklogout = ()=>{
    window.localStorage.removeItem("loggedinUser")
    window.location.reload(true)
    setUser([])
  }

  return (
    <div>
      <nav class="container flex justify-around py-8 mx-auto bg-bg">
        <div class="bg-bg flex items-center">
          <h3 class="text-2xl bg-bg font-medium text-blue-500">
            <img className="w-10 rounded-full text-bg bg-bg" src={logo} alt="LOGO"></img>
          </h3>
        </div>
        <div class="  font-productsans items-center hidden space-x-8 lg:flex">
          <a
            onClick={() => {
              clickactive("home");
            }}
            className={`hover:underline hover:underline-offset-8  ${
              active === "home"
                ? "underline underline-offset-8"
                : "no-underline"
            }`}
          >
            HOME
          </a>
          <a
            className={`hover:underline hover:underline-offset-8  ${
              active === "journey"
                ? "underline underline-offset-8"
                : "no-underline"
            }`}
            onClick={() => {
              clickactive("journey");
            }}
          >
            THE JOURNEY
          </a>
          <a
            className={`hover:underline hover:underline-offset-8  ${
              active === "team"
                ? "underline underline-offset-8"
                : "no-underline"
            }`}
            onClick={() => {
              clickactive("team");
            }}
          >
            TEAM
          </a>
          <a
            className={`hover:underline hover:underline-offset-8  ${
              active === "store"
                ? "underline underline-offset-8"
                : "no-underline"
            }`}
            onClick={() => {
              clickactive("store");
            }}
          >
            STORE
          </a>
          <a
            className={`hover:underline hover:underline-offset-8  ${
              active === "contact"
                ? "underline underline-offset-8"
                : "no-underline"
            }`}
            onClick={() => {
              clickactive("contact");
            }}
          >
            CONTACT
          </a>
        </div>
        <div class="flex items-center space-x-2">
          <a href="#"></a>
          {user?.userName ? (
            <button
              onClick={() =>{clicklogout()
           }}
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              class="block text-white font-productsans  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              {user?.userName}
            </button>
          ) : (
            <button
              onClick={() => {
                clickactive("login");
              }}
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              class="block text-white font-productsans  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Login/Singup
            </button>
          )}

          <a href="#" class="p-2 rounded-full bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar