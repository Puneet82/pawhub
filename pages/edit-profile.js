import React from "react";
import Footer from "../components/Footer";
import EditProfile from "../components/EditProfile";
import img from "../public/img/signup/signupleft.png";

const editprofile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-around ">
      <div className="flex flex-1">
        <div
          className="w-[50%] bg-center bg-cover hidden md:block m-10"
          style={{ backgroundImage: `url(${img.src})` }}
        ></div>
        <div className="w-full md:w-[50%] flex items-center justify-evenly">
          <div className="w-full max-w-md px-4 py-8 shadow hover:shadow-lg m-8 rounded-2xl">
            <EditProfile />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default editprofile;
