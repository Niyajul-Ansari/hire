import React from 'react'
import logo from '../images/poster.png'
// import logo1 from '../images/yellow (1).png'
// import React from 'react'

// import React from 'react'

function Missionimpact() {
    return (
        <>
        
     <div className="relative w-full h-[500px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${logo})` }}>
      
      {/* Red Semi-Circle Overlay */}
      {/* <img 
        src={logo} 
        alt="Red Semi-Circle" 
        className="absolute top-0 right-0 h-full w-250 object-cover px-2"
      /> */}

      {/* Yellow Outlined Shape */}
      {/* <img 
        src={logo}
        alt="Yellow Outline" 
        className="absolute top-1/2 right-10 transform -translate-y-1/2 w-40 h-auto "
      /> */}

      {/* Content */}
      <div className="absolute top-1/3 left-10 transform -translate-y-1/2">
        <h1 className="text-16xl font-bold text-white">
          OUR MISSION<span className="text-gray-400"></span> VISION
        </h1>
       
        <div className="flex items-center gap-1 mt-2">
          {/* <a href="" className="text-gray-500 hover:text-gray-700  text-4xl">Home</a> */}
          <span className="text-red-500">›</span>
          <a href="" className="text-red-500 hover:text-red-700 font-medium text-6xl">OUR  MISSION <br></br>AND VISION</a> 

        </div>
      </div>
    </div>
        </>
        
    )
}

export default Missionimpact




