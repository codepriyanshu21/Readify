import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Integrate with API, EmailJS, Firebase, etc.
  };

  return (
    <section className="px-4 py-10 md:py-16 bg-[#121212] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-[#1e1e1e] text-white p-6 sm:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">📬 Contact Us</h2>

        {isSubmitSuccessful && (
          <p className="text-green-500 text-center mb-4 font-medium">Your message has been sent!</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#2c2c2c] border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="johndoe@email.com"
              className="w-full bg-[#2c2c2c] border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full bg-[#2c2c2c] border border-gray-600 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
