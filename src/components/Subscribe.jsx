import React from "react";

const Subscribe = () => {
  return (
    <>
      <div class="z-10 relative mx-auto mb-20 w-[85%] mt-16 rounded-xl bg-[url(https://siddharthpetro.com/wp-content/uploads/2019/09/insurance-footer-background.png)]">
        <div class="flex flex-wrap items-center p-5 md:px-10 md:py-12">
          <div class="w-full lg:w-6/12">
            <h2 class="block antialiased font-sans text-4xl leading-[1.3] text-white mb-2 font-black tracking-normal">
              Sign up for our newsletter
            </h2>
            <p class="block antialiased font-sans text-base font-light leading-relaxed text-white opacity-80">
              Join our newsletter and get news in your inbox every week! We hate
              spam too, so no worries about this.
            </p>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <form
              action=""
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              class="mt-4 block md:flex lg:mt-0"
            >
              <div class="w-full md:w-8/12">
                <div class="relative w-full min-w-[200px] h-11">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required=""
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500 text-white/80"
                    placeholder=" "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500 peer-placeholder-shown:text-white/80 text-white/80">
                    Enter your email
                  </label>
                  
                </div>
               
              </div>
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] mt-3 w-full md:mt-0 md:ml-3 md:w-auto"
              >
                Subscribe
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
