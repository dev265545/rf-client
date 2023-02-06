import React from 'react'
import shoes from "../assets/shoes-lp.png"
import design from "../assets/home-final.png"
function Page() {
  return (
    <header class=" bg-bg ">
      <div class="">
        <div class=" items-center justify-center  flex flex-col-reverse lg:flex-row-reverse">
          <div class="">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-gobold text-gray-800  lg:text-4xl">
                Best place to choose <br />
                <span class="text-blue-500 ">
                  <h1 aria-label="Hi! I'm a developer">
                    &nbsp;<span class="typewriter nocaret"></span>
                  </h1>
                </span>
              </h1>

              <p class=" text-gray-900 font-productsans ">
                Step into the world of creativity with <strong>Kicksup</strong>{" "}
                <br />
                <strong>Kicksup</strong> – your one-stop destination for
                custom-designed shoes! Whether you're looking for a unique and
                stylish look, or want to express your personality through your
                footwear, we've got you covered. With our intuitive online
                platform, you can create the perfect shoes to match your style,
                from the comfort of your own home. Choose from a wide range of
                materials, colors, patterns, and styles to create your dream
                shoes. Shop now and unleash your creativity with{" "}
                <strong>Kicksup !</strong>
              </p>

              <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center  rounded-2xl pr-10 ">
            <img class=" " src={design} alt="Catalogue-pana.svg" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Page