import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';

const Freebooks = () => {
    const [books,setbooks]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/books`)
                const data=res.data.book.filter((data) => data.price === 0);
                setbooks(data)
            } catch (error) {
                console.log('error',error)
            }
        }
        getBook()

    },[])
   
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:false,
                },
            },
        ],
    };


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='py-8'>
                    <h1 className='font-semibold text-2xl pb-2 text-white'>Free Offered Courses</h1>
                    <p className='text-gray-300'>
                        Explore a curated list of books available completely free of cost.
                        Whether you're into fiction, self-help, or classic literature, our free offerings
                        give you access to high-quality reading material at no charge. Expand your knowledge
                        and enjoy these books without spending a penny.
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {books.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebooks;
