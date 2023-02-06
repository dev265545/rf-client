import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Cart({ items, newcartitem, removeanitem }) {
  // console.log("email",user)
  const [cart, setCart] = useState([]);
  const products = [];
  console.log("items", items);
  const handleRemoveItem = (idx) => {
    // assigning the list to temp variable
    const temp = [...items];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
      removeanitem(temp);
  };
  const [open, setOpen] = useState(true);

  // useEffect(() => {
  //     const databody = {
  //       email: user?.email,
  //     };
  //  axios
  //    .get("http://localhost:8080/users/oneuser", databody)
  //    .then((response) => {
  //      setCart(response.data);

  //    });
  //   }
  // , [user,cart])
  let sum = 0;
  items.forEach((element) => {
    sum = sum + element?.price;
  });
  console.log(cart);
  return (
    <div
      class="     "
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="">
        <div class="">
          <div class=" flex max-w-full ">
            <div class="w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y">
                        {items.map((item, index) => (
                          <li key={index} class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0  rounded-md border border-gray-200">
                              <img
                                src={item?.image}
                                alt={item?.title}
                                class="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item?.title}</a>
                                  </h3>
                                  <p class="ml-4">Rs. {item?.price}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                  {item?.type}
                                </p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                  <button
                                  onClick={()=>{handleRemoveItem(index)}}
                                    type="button"
                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>Rs .{sum}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart