import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion'; 

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.8 }} 
      transition={{ duration: 0.3 }} 
    >
      <motion.div 
        className="bg-white p-8 rounded-lg w-full max-w-md"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }} 
      >
        {isSubmitted ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Appointment Successfully Booked!</h2>
            <p className="text-lg">Your appointment has been successfully booked. Please check your email for confirmation.</p>
            <div className="flex justify-center mt-6">
              <button onClick={onClose} className="bg-customOrange hover:bg-orange-700 text-white px-4 py-2 rounded">Close</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                {...register('fullName', { required: 'Full Name is required' })} 
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                {...register('email', { 
                  required: 'Email is required', 
                  pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/, message: 'Invalid email address' }
                })} 
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                {...register('phone', { required: 'Phone Number is required' })} 
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="staffName" className="block mb-2">Staff</label>
              <select 
                id="staffName" 
                {...register('staffName', { required: 'Please select a staff member' })} 
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select a staff</option>
                <option value="Johnny">Johnny</option>
                <option value="Brayan">Brayan</option>
                <option value="Yassine">Yassine</option>
              </select>
              {errors.staffName && <p className="text-red-500 text-sm">{errors.staffName.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="appointmentDate" className="block mb-2">Date and Time</label>
              <input 
                type="datetime-local" 
                id="appointmentDate" 
                {...register('appointmentDate', { required: 'Date and Time are required' })} 
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.appointmentDate && <p className="text-red-500 text-sm">{errors.appointmentDate.message}</p>}
            </div>

            <div className="flex justify-between mt-4">
              <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              <button type="submit" className="bg-customOrange hover:bg-orange-700 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AppointmentModal;
