import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Card from '../components/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Courses = () => {
  const [book,setBook]=useState([]);

  useEffect(()=>{
    const getBook=async ()=>{
      try {
        const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/books`);
        console.log(res.data)
        setBook(res.data.book)
      }
      catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])

  return (
    <div>
      <Navbar />
      <div className='min-h-screen mt-[100px] max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you{" "}
            <span className='text-orange-500'>Here!</span>
          </h1>
          <p className='mt-12 text-gray-300'>
            Welcome to our online bookstore — your gateway to endless stories, powerful ideas, and transformative knowledge.
            Whether you're a curious learner, a seasoned bibliophile, or someone just looking for your next great read,
            we've curated a collection that speaks to every kind of reader. Browse through our ever-growing library of free and premium titles,
            and discover books that will inspire, educate, and entertain you.
          </p>
          <Link to='/'>
            <button className='mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 duration-200'>
              Back
            </button>
          </Link>
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-3  gap-8'>
          {
            book.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses