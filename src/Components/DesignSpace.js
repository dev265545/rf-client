import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi"
import Cart from "./Cart";
function isInt(n) {
  return n % 1 === 0;
}
function DesignSpace({product,clickactive,user,items,newcartitem,removeanitem}) {
  const [listofProudcts, setListofProduct] = useState([]);
  
  const additem = ()=>{
    newcartitem(product)
  }

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      setListofProduct(response.data);
    });
  }, []);

  console.log(listofProudcts);
  let cart;
  const addtocart = ()=>{
    additem()
    // cart = product?.cart + ";" + product?.id;
    // const databody = {
    //  cart :  cart,
    //  email : user?.email
    // };
    // axios
    //   .post("http://localhost:8080/users/addtocart", databody)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  return (
    <div className="grid p-3 grid-cols-4 gap-10 font-productsans">
      <div className="col-span-3  shadow-2xl rounded-lg p-4">
        <div className="mb-4 flex flex-row shadow-3xl">
          <div
            onClick={() => {
              clickactive("store");
            }}
            className=" gap-7  "
          >
            <BiArrowBack className="text-2xl " />
          </div>
          <p className="font-productsans flex-1 text-2xl mr-4">
            Your Design Space
          </p>
          <div className=" gap-3 inline-flex ">
            <button
              onClick={() => addtocart()}
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div>
          <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div class=" flex flex-row gap-6">
                <div>
                  <img className=" w-96" src={product?.image}></img>
                </div>
                <div className="grid grid-rows-3 gap-4">
                  <img className="w-28" src={product?.image}></img>
                  <img className="w-28" src={product?.image}></img>
                  <img className="w-28" src={product?.image}></img>
                </div>
                <div className="text-black flex-row  ">
                  <div className="items-center text-2xl ">
                    {product?.title}
                    <p className="text-sm">{product?.description}</p>
                  </div>
                  <div className="flex flex-row gap-1 mt-3">
                    {[...Array(Math.floor(product?.rating))].map((e, i) => (
                      <span className=" " key={i}>
                        <FaStar className="  text-yellow-500 " />
                      </span>
                    ))}
                    {isInt(product?.rating) !== true && (
                      <span>
                        <FaStarHalf className="  text-yellow-500 " />
                      </span>
                    )}
                  </div>
                  <div>
                    Rs.{product?.price} /-
                    <p>Get an execlusive 20% off shopping with HDFC bank</p>
                  </div>
                  <div className="flex flex-col mt-4 gap-4">
                    <div className="flex flex-row gap-4">
                      <div className="mr-3">Front </div>
                      <div className="w-8 bg-red-400 h-8"></div>
                      <div className="w-8 bg-yellow-400 h-8"></div>
                      <div className="w-8 bg-purple-400 h-8"></div>
                      <div className="w-8 bg-blue-400 h-8"></div>
                    </div>
                    <div>
                      {" "}
                      <div className="flex flex-row gap-4">
                        <div>Middle </div>
                        <div className="w-8 bg-red-400 h-8"></div>
                        <div className="w-8 bg-yellow-400 h-8"></div>
                        <div className="w-8 bg-purple-400 h-8"></div>
                        <div className="w-8 bg-blue-400 h-8"></div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <div className="flex flex-row gap-4">
                        <div className="mr-3">Back</div>
                        <div className="w-8 bg-red-400 h-8"></div>
                        <div className="w-8 bg-yellow-400 h-8"></div>
                        <div className="w-8 bg-purple-400 h-8"></div>
                        <div className="w-8 bg-blue-400 h-8"></div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <div className="flex flex-row gap-4">
                        <div className="mr-4">Sole</div>
                        <div className="w-8 bg-red-400 h-8"></div>
                        <div className="w-8 bg-yellow-400 h-8"></div>
                        <div className="w-8 bg-purple-400 h-8"></div>
                        <div className="w-8 bg-blue-400 h-8"></div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <div className="flex flex-row gap-4">
                        <div className="mr-4">Size</div>
                        <div className="w-8 border  border-black items-center justify-center flex h-8">
                          6
                        </div>
                        <div className="w-8 border  border-black items-center justify-center flex h-8">
                          7
                        </div>
                        <div className="w-8 border  border-black items-center justify-center flex h-8">
                          8
                        </div>
                        <div className="w-8 border  border-black items-center justify-center flex h-8">
                          9
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <div class="stars-rating:bg-yellow-400 current-hover:bg-yellow-400 flex flex-row-reverse ">
                  <i class="mx-1 rounded-full border border-yellow-400 p-1">
                    <FaRegStar />
                  </i>
                  <i class="mx-1 rounded-full border border-yellow-400 p-1">
                    <FaRegStar />
                  </i>
                  <i class="mx-1 rounded-full border border-yellow-400 p-1">
                    <FaRegStar />
                  </i>
                  <i class="mx-1 rounded-full border border-yellow-400 p-1">
                    <FaRegStar />
                  </i>
                  <i class="mx-1 rounded-full border border-yellow-400 p-1">
                    <FaRegStar />
                  </i>
                </div>
                Rate Product
              </div>
              <div className="flex flex-row items-center justify-center mt-10 p-3">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Share your Design
                </button>
                <button
                  onClick={() => {
                    addtocart();
                  }}
                  type="button"
                  class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg p-4 ">
        Cart
        <Cart
          items={items}
          newcartitem={newcartitem}
          removeanitem={removeanitem}
        />{" "}
      </div>
    </div>
  );
}

export default DesignSpace;
