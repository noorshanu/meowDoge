import React from 'react'

function RoadMap() {
  return (
<section className="relative z-10 mt-4 ">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-14">
   
      <div className=' flex items-center gap-7 justify-center sm:flex-row flex-col'>
        <img src="images/img1.jpeg" alt="" className=' border-2 rounded-3xl w-[540px]' />
        <img src="images/img2.jpeg" alt="" className=' border-2 rounded-3xl w-[400px]' />
      </div>
     

  

 
      </div>
    </section>
  )
}

export default RoadMap