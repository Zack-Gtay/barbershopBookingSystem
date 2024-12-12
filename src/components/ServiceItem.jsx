import React from 'react';

const ServiceItem = ({ image, price, description }) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="relative w-[50px] h-[50px]">
        <div className="absolute w-full h-full bg-[#FFDCC0] rounded-full"></div>
        <img
          src={image}
          alt={description}
          className="absolute w-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className='mb-8'>
        <p className="font-semibold mt-3 text-2xl">{price}</p>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
