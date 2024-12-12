import React, { useState } from 'react';
import { IoPlayCircle } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Man from "../assets/hero.png";
import Scisors from "../assets/scisors.png";
import Razor from "../assets/razor.png";
import ShavingBrush from "../assets/shaving-brush.png";
import ServiceItem from './ServiceItem';
import AppointmentModal from './AppointmentModal';

const CoreHighlight = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { image: Scisors, price: '55.00€', description: 'Haircut' },
    { image: Razor, price: '45.00€', description: 'Shave' },
    { image: ShavingBrush, price: '35.00€', description: 'Hairdo' },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-between h-full w-full px-3 md:px-20 lg:px-20 pt-8 md:pt-12 lg:pt-12 '>
      <motion.div
        className='flex flex-col gap-6 md:gap-10 lg:gap-12 justify-start w-full md:w-[500px] lg:w-[500px]'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl md:lg:text-5xl lg:text-5xl font-extrabold leading-[45px] md:leading-[65px] lg:leading-[65px]'>
          A Seamless Salon Experience in Your Area
        </h2>
        <p className='leading-[30px] text-gray-700'>
          If you've ever wondered what hairstyles suit you and how you should cut your hair, here's a list of the top styles for all men.
        </p>
        <div className='flex flex-row items-center gap-3'>
          <button
            className='bg-customOrange hover:bg-orange-700 w-[270px] px-3 py-5 text-white text-xl rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg '
            onClick={openModal}
          >
            Book an Appointment
          </button>
          <IoPlayCircle
            className="text-7xl cursor-pointer rounded-full p-0 hover:shadow-lg transition-shadow"
           
          />
        </div>
      </motion.div>

      <motion.div
        className='hidden md:block lg:block'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src={Man} className='h-[600px] mt-[-60px]' alt="Salon Experience" />
      </motion.div>

      <motion.div
        className="flex flex-row md:flex-col lg:flex-col lg:h-[75%] justify-between items-center md:items-start lg:items-start pt-12 md:pt-0 lg:pt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            image={service.image}
            price={service.price}
            description={service.description}
          />
        ))}
      </motion.div>

      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default CoreHighlight;
