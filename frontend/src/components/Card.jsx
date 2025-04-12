import React from 'react'

const Card = ({ item }) => {
  
  return (
    <>
      <div>
        <div className="card bg-base-100 w-full hover:scale-105 duration-300  sm:w-80 md:w-96 shadow-xl mx-auto">
          <figure>
            <img className='h-[300px] w-full'
              src={item.image}
              alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.price===0?'Free':`Rs ${item.price}`}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline px-2 py-1 border-white hover:bg-slate-950 duration-300">{item.author}</div>
              <div className="badge badge-outline px-2 py-1 border-white hover:bg-slate-950 duration-300">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card