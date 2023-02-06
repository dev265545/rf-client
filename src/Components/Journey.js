import React from 'react'

function Journey() {
  return (
    <div className=" pl-40 pr-40 rounded-xl shadow-2xl font-productsans   ">
      <div className=" flex pt-10 flex-1  h-80   w-full bg-hero   bg-blend-darken bg-cover bg-center bg-fixed  ">
        <div className="text-7xl items-center justify-center h-full w-full backdrop-saturate-50 tracking-[.15em]  text-white font-gobold text-center p-3 ">
          THE JOURNEY
        </div>
      </div>
      <div className="bg-black  h-full w-full text-white feather-edge ">
        <div className="p-10 backdrop-grayscale ">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class=" mb-1 text-xl font-productsans leading-none text-white dark:text-white">
                THE ROOTS
              </time>
              {/* <h3 class="text-lg font-semibold text-white dark:text-white">
                  Application UI code in Tailwind CSS
                </h3> */}
              <p class="mb-4 text-base font-productsans text-white dark:text-white">
                Our entire life when we shop, we are limited by choices that are
                there in a store. We are often on the side where we buy our
                favourite coloured shoes made by someone else but what if we
                designed it? What if we could involve in the making of a shoe we
                want to buy? This little thought sprouted to become what we are
                today, KICKSUP! ;
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-xl  leading-none text-white dark:text-white">
                Chapter I
              </time>
              {/* <h3 class="text-lg font-semibold text-white dark:text-white">
                  Marketing UI design in Figma
                </h3> */}
              <p class="text-base font-productsans text-white dark:text-white">
                Understanding the trends in the industry and what the users
                think when they buy were our top priorities before we moved
                further in the building. After weeks of fruitful research, we
                stepped into the user's shoes and look at what we plan to do.
                It's a great joy for the users if they are involved in the
                making. We're heading into an era of technology and people
                prefer online shopping to shopping in an outlet.
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-xl font-productsans leading-none text-white dark:text-white">
                CHAPTER II
              </time>
              {/* <h3 class="text-lg font-semibold text-white dark:text-white">
                  E-Commerce UI code in Tailwind CSS
                </h3> */}
              <p class="text-base font-productsans text-white dark:text-white">
                Every milestone begins with a single step and before KICKSUP
                sprouted, the team manufactured in small scale with two users a
                month. This experience was crucial to our brand as this is our
                first practical experience. Interacting with the users was the
                best thing ever. The positive reviews and support from people
                motivated us to push our limits further.
              </p>
            </li>
            <li class="ml-4 mt-8">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-xl font-productsans leading-none text-white dark:text-white">
                KICKSUP
              </time>
              {/* <h3 class="text-lg font-semibold text-white dark:text-white">
                  E-Commerce UI code in Tailwind CSS
                </h3> */}
              <p class="text-base font-productsans text-white dark:text-white">
                Here we are, made a perfect platform for you to involve in the
                making of a shoe you want to buy! We have evolved ever since we
                started out. We wish to help you more and make KICKSUP a bigger
                team. Design your shoe and be a part of our journey!
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Journey