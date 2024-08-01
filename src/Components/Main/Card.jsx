import React from "react";

const Card = ({ name, img, status }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="hover:scale-105 duration-700 ease-in-out cursor-pointer shadow-lg"
          style={ {borderRadius: "50%", width: "100px", height: "100px",}}
          src={img}
          alt={name}
        ></img>
        <p className=" absolute  text-sm font-medium text-white font-roboto no-underline leading-none"   style={{ fontSize:"15px" ,color:"#000" , margin:"20px"}}>
          {name}
        </p>
        {/* <p
          className={`${
            status === "Offline"
              ? "absolute bottom-4 right-4 text-sm font-medium text-red-600 font-roboto no-underline leading-none"
              : "absolute bottom-4 right-4 text-sm font-medium text-green-600 font-roboto no-underline leading-none"
          }`}
        >
          {status}
        </p> */}
      </div>
    </div>
  );
};

export default Card;
