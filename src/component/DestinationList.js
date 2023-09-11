import React from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DestinationList = ({img,title,icon,days,price}) => {
  return (
    <div>
      <div className="flex flex-col gap-3 border border-white cursor-pointer shadow-black rounded-2xl  shadow-sm hover:shadow-slate-950 hover:shadow-lg w-full">
        <img
          src={img}
          alt="service-img"
          className=" p-5 rounded-3xl mx-auto mt-6"
        />
        <h1 className="text-gray-800 mx-auto mt-3 font-semibold text-2xl">
         {title}
        </h1>
        <p className="text-gray-800 mx-auto font-light  text-lg">{price}</p>
        <p className="text-gray-800 mx-auto font-light  text-lg  mb-2">
          <FontAwesomeIcon icon={faPaperPlane}/>
          <span className="pr-3 text-gray-800"></span>{days}
        </p>
      </div>
    </div>
  );
};

export default DestinationList;
