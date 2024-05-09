import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-4  pb-[8rem] ">
      <div className="container-wrapper">
      
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
       

            <div className=" max-w-2xl  py-8 px-4 rounded-3xl ">
            <h1 className="font-groot-one text-lg sm:text-3xl py-2 ">
         Welcome to DogeMeow, it is bringing the purr-fect blend of memes, cuteness, and laughter to Solana world!
         </h1>
         
              <div className=" py-2">
                <a
                  href="https://solscan.io/token/8Xwjy7nMs9fpFbGpEKJ8aLm2NHSvBy4jbKbyL7d6cgv6"
                  target="_blank"
                  className="my-2 font-groot-two flex justify-start text-xs  text-[#000000] sm:text-lg font-bold "
                >
                  {" "}
                  Contract : 8Xwjy7nMs9fpFbGpEKJ8aLm2NHSvBy4jbKbyL7d6cgv6
                </a>
              </div>

              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
              <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/2VumoXXSe4gTvFe4A88Z9TWLR2wn23MSfkPXz4WR7Gd7?t=1715233733552"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#e18e4a] shadow-lg shadow-black/40 text-[#000000]  font-bold  border-[#000000] border-2"
                >
                  DEXTOOLS
                </a>
               
            
                <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
            <a target="_blank" href="https://twitter.com/DogeMeoww" className=" text-4xl">
              <FaTwitter fill="#000" />
            </a>
            <a target="_blank" href="https://t.me/dogemeows" className=" text-4xl">
              <FaTelegram fill="#000" />
            </a>
          </div>
            
              </div>
            </div>

            <div className=" w-full">
              <img src="images/hero2.png" alt="" className=" h-auto sm:h-[400px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
