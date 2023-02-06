import axios from 'axios';
import React, { useState } from 'react'

function Admin({user}) {
    const [Name,setName] = useState()
     const [Price, setPrice] = useState();
      const [Rating, setRating] = useState();
       const [Url, setUrl] = useState();
       const [Category,setCategory] = useState()
       const [Descr,setDescr]= useState()


       const handlesubmit = ()=>{
        const databody = {
            title : Name,
            price : Price,
            image : Url,
            description : Descr,
            published : true,
            rating : Rating,
            category :Category

        }
       axios
         .post("http://localhost:8080/products", databody)
         .then(function (response) {
           console.log(response.data);
           

           
         })
         .catch(function (error) {
           console.log(error);
         });
       }



  return (
    <div>
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class=" flex items-center justify-center overflow-y-auto overflow-x-hidden top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative p-4 bg-bg rounded-lg shadow  sm:p-5">
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 text-white">
                Add Product
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
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
            </div>
            <form action="#">
              <div class="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 text-white"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={Name}
                    type="text"
                    name="name"
                    id="name"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 text-white"
                  >
                    Image Url
                  </label>
                  <input
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                    value={Url}
                    type="text"
                    name="name"
                    id="name"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="price"
                    class="block mb-2 text-sm font-medium text-gray-900 text-white"
                  >
                    Price
                  </label>
                  <input
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={Price}
                    type="number"
                    name="price"
                    id="price"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="$2999"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="price"
                    class="block mb-2 text-sm font-medium text-gray-900 text-white"
                  >
                    Rating
                  </label>
                  <input
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                    value={Rating}
                    type="number"
                    name="price"
                    id="price"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="$2999"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 text-white"
                  >
                    Category
                  </label>
                  <input
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    value={Category}
                    type="text"
                    name="price"
                    id="price"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="$2999"
                    required=""
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 text-white"
                  >
                    Description
                  </label>
                  <textarea
                    onChange={(e) => {
                      setDescr(e.target.value);
                    }}
                    value={Descr}
                    id="description"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
              onClick={()=>{handlesubmit()}}
                type="submit"
                class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                <svg
                  class="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin