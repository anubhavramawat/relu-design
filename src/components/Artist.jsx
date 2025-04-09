import React from 'react'
import Photo1 from "../assets/photo1.png"
import Photo3 from "../assets/Photo3.png"
import Photo4 from "../assets/Photo4.png"
import Photo5 from "../assets/Photo5.png"
import Image38 from "../assets/Image38.png"
import profile1 from "../assets/profile1.png"
import profile4 from "../assets/profile4.png"
import profile5 from "../assets/profile5.png"
import profile6 from "../assets/profile6.png"
import profile7 from "../assets/profile7.png"


const Artist = () => {
    const cardItems=[
        {
            bgImage:Photo1,
            profileImage:profile1,
            name:"Thoms Edward",
            handle:"thewildwithyou"
        },
        {
            bgImage:Photo3,
            profileImage:profile4,
            name:"Thoms Edward",
            handle:"thewildwithyou"
        },
        {
            bgImage:Photo4,
            profileImage:profile5,
            name:"Thoms Edward",
            handle:"thewildwithyou"
        },
        {
            bgImage:Image38,
            profileImage:profile6,
            name:"Thoms Edward",
            handle:"thewildwithyou"
        },
        {
            bgImage:Photo5,
            profileImage:profile7,
            name:"Thoms Edward",
            handle:"thewildwithyou"
        },
    ]

  return (
    <div className="absolute top-[150px] right-[96px] w-[260px] h-[707px] bg-transparent rounded-lg opacity-100">
      {/* Background Image */}
      <div className="h-full overflow-y-scroll ">
      {cardItems.map((item,index)=>(
        <div key={index} className="relative mt-5 rounded-lg overflow-y-auto">
        <div
        className="h-40 bg-cover bg-center rounded-lg mt-5"
        style={{
          backgroundImage: `url(${item.bgImage})`,
        }}
      ></div>

      {/* Profile Info Overlay */}
      <div className="absolute top-26 left-4 flex items-center">
        {/* Profile Picture with Online Status */}
        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-4 border-white">
          <img
            src={item.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        {/* Name & Handle */}
        <div className="ml-4 text-white drop-shadow">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-sm opacity-90">@{item.handle}</p>
        </div>
      </div>
      </div>
      ))}
      </div>
      
    </div>
  )
}

export default Artist
