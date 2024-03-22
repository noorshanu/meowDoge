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
              Welcome to the wild world of ShibaSol!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one  text-[#000]  font-medium">
              In the meme jungle, ShibaSol reigns supreme with his adorable
              charm and endless memes! With his trusty sidekick, ShibaSol
              spreads joy and laughter wherever he goes, making Solana brighter
              with every wag of his tail.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one   text-[#000] font-medium">
            ShibaSol isn't your average meme coin - he's the next viral meme! Known for his cuteness, unique features, and explosive growth, ShibaSol offers more than just memes. 
            </h1>

         
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
