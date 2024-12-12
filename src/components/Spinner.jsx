import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin border-4 border-t-4 border-customOrange w-16 h-16 rounded-full"></div>
    </div>
  );
};

export default Spinner;
