import React from 'react'
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex mt-16 flex-col md:flex-row items-center">
            {/* Left Section */}
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
                        Hello, welcome to your daily dose of{" "}
                        <span className="text-orange-500 font-bold">bookish knowledge</span>
                    </h1>
                    <p className="text-lg text-white">
                        Discover curated reads, explore new genres, and enrich your mind. Your next favorite book is just a click away.
                    </p>
                    <div className="space-y-4">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            <svg className="h-5 w-5 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input type="email" placeholder="mail@site.com" required className="outline-none bg-transparent" />
                        </label>
                        <button className="btn btn-primary w-full md:w-auto">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 order-1 mt-8 md:order-2 flex justify-center">
                <div className="bg-gradient-to-br  from-slate-700 to-slate-800 p-4 rounded-xl shadow-lg">
                    <img
                        src={banner}
                        alt="Bookstore Banner"
                        className="w-72 h-72 md:w-96 md:h-96 object-contain  rounded-xl shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                    />

                </div>


            </div>
        </div>
    )
}

export default Banner
