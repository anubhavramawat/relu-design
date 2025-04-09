import React from 'react'
import profile1 from "../assets/profile1.png"
import Profile1_bg from "../assets/profile1_bg.png"
import profile3 from "../assets/profile3.png"
import Profile3_bg from "../assets/profile3_bg.png"
import Image39 from "../assets/Image 39.png"
import Image40 from "../assets/Image 40.png"
import Image41 from "../assets/Image41.png"
import Image38 from "../assets/Image38.png"
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const Mainfeed = ({ avatar, name, handle, content, image, likes, comments, shares }) => {
  return (
    <div className="w-[620px] h-[600px] ml-[100px] bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4 space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm">@{handle}</p>
        </div>
        <div className="ml-auto text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 12h.01M12 12h.01M18 12h.01"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <p className="text-gray-700 text-sm">
          {content}{' '}
          <span className="text-blue-500 font-medium cursor-pointer">Read More</span>
        </p>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt="Post"
          className="w-full object-cover"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-around items-center text-gray-700 text-sm py-4 border-t">
        <div className="flex items-center space-x-1">
          <Heart className="w-4 h-4" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Share2 className="w-4 h-4" />
          <span>{shares}</span>
        </div>
      </div>
    </div>
  )
}

const cardItems = [
  {
    image: Image39,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99"
  },
  {
    image: Image38,
    title: "Abstract Color Splash Canvas",
    price: "$149.99"
  },
  {
    image: Image41,
    title: "Nature-Inspired Wooden Wall Art",
    price: "$179.99"
  },
  {
    image: Image40,
    title: "Minimalist Line Drawing Print",
    price: "$89.99"
  }
];

const Feed = () => {
  return (
    <div className='pt-38 p-6 bg-gray-100 min-h-screen flex flex-col items-center space-y-6'>
      {/* First Post */}
      <Mainfeed
        avatar={profile3}
        name="Thomas J"
        handle="thecustomcreator"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image={Profile3_bg}
        likes="12.3k"
        comments="6.2k"
        shares="4.1k"
      />

      {/* Second Post */}
      <Mainfeed
        avatar={profile1}
        name="Lara Leones"
        handle="thewallart"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image={Profile1_bg}
        likes="9.8k"
        comments="8.6k"
        shares="7.2k"
      />

      {/* <div>
        <div>
          <img src={Image39} alt="image39" />
          <p>Modern Wall Decor Framed Painting</p>
          <span>$199.99</span>
        </div>
      </div> */}

    {/* Scrollable Card Section */}
  <div className="ml-[100px] w-[620px] flex space-x-4 overflow-x-auto pb-4">
    {cardItems.map((item, index) => (
      <div
        key={index}
        className="min-w-[200px] bg-white shadow-md rounded-lg p-4 flex-shrink-0"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <p className="text-sm font-medium">{item.title}</p>
        <div className="flex items-center justify-between mt-1">
        <span className="text-lg font-semibold text-gray-800">{item.price}</span>
        <div className="text-500 text-sm ml-2">⭐⭐⭐⭐⭐</div>
      </div>
      </div>
    ))}
  </div>
  </div>
  );
};

export default Feed
