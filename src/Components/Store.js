import React, { useEffect, useState } from 'react'
import {FiFilter,} from "react-icons/fi"
import {RiFilterOffFill} from "react-icons/ri"
import {BsSearch} from "react-icons/bs"
import axios from 'axios';
import {FaStar, FaStarHalf} from "react-icons/fa"
import DesignSpace from './DesignSpace';
import Cart from './Cart';
function isInt(n) {
  return n % 1 === 0;
}
function Store({
  clickactive,
  active,
  clickproduct,
  items,
  newcartitem,
  removeanitem}) {
  const [listofProudcts, setListofProduct] = useState([]);
  const [priceTo, setpriceTo] = useState(100000000);
  const [priceFrom, setpriceFrom] = useState(0);
  const [type, setType] = useState("null");

  const [design, setdesign] = useState(false);

  useEffect(() => {
    if (type !== "null") {
      axios
        .get(
          `http://localhost:8080/products/type?priceFrom=${priceFrom}&priceTo=${priceTo}&type=${type}`
        )
        .then((response) => {
          setListofProduct(response.data);
        });
    } else {
      axios
        .get(
          `http://localhost:8080/products?priceFrom=${priceFrom}&priceTo=${priceTo}`
        )
        .then((response) => {
          setListofProduct(response.data);
        });
    }
  }, [priceFrom, priceTo, type]);

  console.log(listofProudcts);
  return (
    <div className="grid p-3 grid-cols-4 gap-10 font-productsans">
      <div className="shadow-2xl rounded-lg p-4 flex flex-col gap-4">
        <div className="mb-4 flex flex-row gap-3 ">
          <p className="font-productsans flex-1 text-2xl">Filters</p>

          <FiFilter className="text-xl" />
          <button
            onClick={() => {
              setpriceFrom(0);
              setpriceTo(10000000);
              setType("null");
            }}
            type="button"
            class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
           Clear
          </button>
         
        </div>
        <div className=" flex flex-col mt-4">
          <p className="font-productsans text-2xl">Type</p>
          <div className="grid grid-rows-3 gap-2">
            <div className="flex flex-row gap-2">
              <input
                onClick={(e) => {
                  setType("sneakers");
                }}
                name="type"
                type="radio"
                checked={type === "sneakers"}
              ></input>
              Sneakers
            </div>
            <div className="flex flex-row gap-2">
              <input
                checked={type === "loafers"}
                name="type"
                onClick={(e) => {
                  setType("loafers");
                }}
                type="radio"
              ></input>
              Loafers
            </div>
          </div>
          <div className=" flex flex-col mt-4">
            <p className="font-productsans text-2xl">Cost</p>
            <div className="grid grid-rows-3 gap-2">
              <div className="flex flex-row gap-2">
                <input
                  onClick={(e) => {
                    setpriceFrom(1500);
                    setpriceTo(4000);
                  }}
                  checked={priceFrom === 1500}
                  name="price"
                  type="radio"
                ></input>
                Rs. 1500-4000
              </div>
              <div className="flex flex-row gap-2">
                <input
                  name="price"
                  onClick={(e) => {
                    setpriceFrom(4001);
                    setpriceTo(7000);
                  }}
                  checked={priceFrom === 4001}
                  type="radio"
                ></input>
                Rs. 4001-7000
              </div>
              <div className="flex flex-row gap-2">
                <input
                  name="price"
                  checked={priceFrom === 7001}
                  onClick={(e) => {
                    setpriceFrom(7001);
                    setpriceTo(1000000);
                  }}
                  type="radio"
                ></input>
                Rs. 7001 and more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 shadow-lg rounded-lg p-4">
        <div className="mb-4 flex flex-row ">
          <p className="font-productsans flex-1 text-2xl">Shoes</p>
          <div className=" gap-3 inline-flex ">
            <BsSearch className="text-2xl" />
            <div className=" border border-black p-1">Sort by</div>
          </div>
        </div>
        <div>
          <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {listofProudcts.map((product, index) => (
                  <div
                    onClick={() => {
                      setdesign(true);
                      clickproduct(product);
                      clickactive("design");
                    }}
                    key={index}
                    href="#"
                    class="group"
                  >
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product?.image}
                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{product?.title}</h3>
                    <p class="mt-1 text-md font-medium text-gray-900">
                      Rs. {product?.price}
                    </p>
                    <div
                      className="flex flex-row
            "
                    >
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
                  </div>
                ))}
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
        />
      </div>
    </div>
  );
}

export default Store