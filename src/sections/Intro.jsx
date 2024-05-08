import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
        <div className="  px-4  py-2 flex justify-between flex-col items-center sm:gap-0 gap-6 ">
          <div className=" w-full sm:w-[500px]  rounded-2xl ">
            {/* <RoadmapCards /> */}

            <img
              src="images/about.png"
              alt=""
              className=" rounded-3xl  h-auto sm:h-[400px] mx-auto mb-4  "
            />
          </div>
          <div className=" max-w-4xl sm:mt-0 text-center">
            <p className="font-semibold font-groot-one text-xl sm:text-3xl  text-[#000]  py-2">
              About DogeMeow
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one  text-[#000]  font-medium">
              Ever wondered what happens when a cat and a Doge coin decide to
              team up and take the crypto world by storm? Well, wonder no more
              because Meow Doge Meme Coin is here to show you!
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one   text-[#000] font-medium">
            Born from the
              most unlikely yet adorable friendship between a cat and a doge,
              Meow Doge is all about spreading joy, laughter, and plenty of
              memes!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
