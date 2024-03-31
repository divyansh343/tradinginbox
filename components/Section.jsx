import React from "react";

const Box = () => {
  return (
    <div>
      <div
        className="px-4 sm:px-16 md:px-32 lg:px-8 xl:px-10"
        data-translation-key="1c27676a-18f5-41b9-8aa5-0ab9e901010a"
      >
        <div className="grid grid-cols-1 items-center mx-auto gap-4 sm:gap-6 max-w-sm sm:max-w-lg lg:max-w-5.5xl lg:grid-cols-2">
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-area-500 bg-neutral-4 translate-x-0 translate-y-0 aspect-[4/3]"
              data-translation-key="0cee1929-160c-4e91-8745-6b01bbf9c851"
            >
              <video autoPlay="" disablepictureinpicture="" loop="" muted="" playsinline="" className="h-full w-full object-cover"><source src="https://storyblok-cdn.photoroom.com/f/191576/x/d472d22cd6/magic-retouch.mp4" type="video/mp4" /></video>
            </div>
          </div>
          <div className="mx-auto grid gap-4 grid-cols-1 lg:-order-1 lg:pr-16">
            <div className="flex-1">
              <h2 className="heading-700 [word-break:break-word] [hyphens:auto] sm:heading-800">
                Remove and replace objects with a swipe
              </h2>
            </div>
            <div className="body-600 flex flex-1 flex-col gap-8 text-content-secondary">
              <span>
                <p>
                  Instantly swipe away imperfections with our Retouch tool and
                  fill the space with new elements, using Photoroom AI Fill.
                  Transform ordinary photos into stunning visuals, as our
                  technology brings your most imaginative concepts to life.
                </p>
              </span>
              <div>
                <a
                  className="relative overflow-hidden inline-flex w-fit items-center justify-center text-center appearance-none rounded-500 outline-none transition duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30 max-w-full truncate focus-visible:ring-[3px] bg-black hover:bg-neutral-8 active:bg-black focus-visible:bg-neutral-8 focus-visible:ring-accent-alpha-5 text-white before:transition-transform before:absolute before:inset-0 before:pointer-events-none before:hidden before:top-[50%] before:h-[500%] before:w-[200%] before:animate-button-loading-indeterminate-wiggle before:blur-3xl"
                  href=""
                >
                  <div className="max-w-full flex items-center justify-center h-10 content-to-edge-spacious-px-500">
                    <span className="max-w-full truncate component-semi-strong-500">
                      Remove objects in seconds
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
