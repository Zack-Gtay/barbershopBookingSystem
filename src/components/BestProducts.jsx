import React from "react";
import { motion } from "framer-motion";
import creamLotion from "../assets/creamLotion.png";
import lotionAftershave from "../assets/lotionAftershave.png";
import { FaStar } from "react-icons/fa";

const Product = ({ image, title, price }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <motion.div
      className="flex flex-row items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={image}
        className="w-36"
        alt={title}
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.9 }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-0 m-0 p-0">
          {stars.map((_, index) => (
            <FaStar key={index} className="text-customOrange mr-1" />
          ))}
        </div>
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-customOrange font-bold text-xl">{price}</p>
      </div>
    </motion.div>
  );
};

const BestProducts = () => {
  return (
    <motion.div
      className="bg-black h-full w-full flex flex-col md:flex-row lg:flex-row gap-5 md:gap-0 lg:gap-0 pt-5 lg:justify-between lg:items-center md:justify-between md:items-center px-3 md:px-20 lg:px-20 py-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <motion.h1
        className="text-4xl font-semibold w-full lg:w-[20%] md:w-[20%] text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Best Selling Products
      </motion.h1>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9 }}
      >
        <Product image={creamLotion} title="Creme lotion" price="€49.00" />
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        <Product
          image={lotionAftershave}
          title="Creme lotion after shave"
          price="€59.00"
        />
      </motion.div>
    </motion.div>
  );
};

export default BestProducts;
