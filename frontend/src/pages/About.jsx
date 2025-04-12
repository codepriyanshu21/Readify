import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white px-4 md:px-20 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange-500">About Us</h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          Welcome to <span className="text-orange-400 font-semibold">Readify</span> — your go-to
          destination for exploring, discovering, and purchasing the best books across genres.
          Whether you're a fiction fanatic, a knowledge seeker, or someone just starting your
          reading journey, we have something for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">Our Mission</h2>
            <p className="text-gray-400 text-sm">
              We aim to make books accessible, enjoyable, and an everyday part of people’s lives. We believe
              a great book can change everything.
            </p>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">What We Offer</h2>
            <p className="text-gray-400 text-sm">
              From bestsellers to indie gems, our collection spans thousands of titles, handpicked to meet
              your reading cravings. Plus, fast shipping and great deals!
            </p>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">Why Choose Us?</h2>
            <p className="text-gray-400 text-sm">
              Passionate about books, built for readers. Our platform is designed to be sleek, responsive,
              and reader-focused.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
