import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import MainComponentTwitter from "./MainComponentTwitter";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notification",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const Icons = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-slate-950">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="w-full md:w-[275px] flex flex-col items-stretch fixed h-screen px-4">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                className="hover:bg-white/10 text-white text-3xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== "Twitter" && <div>{item.title}</div>}
              </a>
            ))}
            <button className="rounded-full bg-primary text-white font-semibold p-4 text-2xl text-center hover:bg-opacity-70 transition duration-300">
              Tweet
            </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent text-white font-semibold p-4 text-2xl text-center hover:bg-white/10 transition duration-200 w-full">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-slate w-10 h-10"></div>

              <div className="text-left text-sm">
                <div className="font-semibold">Murali R</div>
                <div className="text-xs">@MuraliRajCodey</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
          
        </section>
        {/* <main>Home timeline</main>
        <section>right section</section> */}
      </div>
      
    </div>
  );
};

export default Icons;