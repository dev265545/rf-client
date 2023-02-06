import React, { useEffect, useState } from 'react'
import {FiFilter} from "react-icons/fi"
import {BsSearch} from "react-icons/bs"
import axios from 'axios';
import {FaStar, FaStarHalf} from "react-icons/fa"
import DesignSpace from './DesignSpace';
function isInt(n) {
  return n % 1 === 0;
}
function Store({ clickactive, active ,  clickproduct }) {
  const [listofProudcts, setListofProduct] = useState([]);
  const [pricerange,setpricerange] = useState([])

  
  const [design, setdesign] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      setListofProduct(response.data);
    });
  }, []);

  console.log(listofProudcts);
  return (
    <div className="grid p-3 grid-cols-4 gap-10 font-productsans">
      <div className="shadow-2xl rounded-lg p-4 flex flex-col gap-4">
        <div className="mb-4 flex flex-row ">
          <p className="font-productsans flex-1 text-2xl">Filters</p>

          <FiFilter className="text-xl" />
        </div>
        <div className=" flex flex-col mt-4">
          <p className="font-productsans text-2xl">Cost</p>
          <div className="grid grid-rows-3 gap-2">
            <div className="flex flex-row gap-2">
              <input onClick={(e)=>{setpricerange(4000)}} type="checkbox"></input>
              Rs. 1500-4000
            </div>
            <div className="flex flex-row gap-2">
              <input type="checkbox"></input>
              Rs. 4001-7000
            </div>
            <div className="flex flex-row gap-2">
              <input type="checkbox"></input>
              Rs. 7001 and more
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
                  clickproduct(product)
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
      <div className="shadow-lg rounded-lg p-4 ">Cart</div>

     
    </div>
  );
}

export default Store