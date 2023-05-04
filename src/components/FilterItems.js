import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FilterItems = ({ item }) => {
  const [imgLink, setImgLink] = useState("default.jpeg");
  useEffect(() => {
    if (item.show.image && item.show.image.medium) {
      setImgLink(item.show.image.medium);
    }
  }, [item])

  return (
    <div className='p-4 my-4 border-t-[1px] border-gray-300 '>
      <div className="flex flex-col sm:flex-row">
        <div className='sm:w-1/3 p-2'>
          <Link to={`/movie/${item.show.id}`}>
            <img src={imgLink} alt="" className='m-auto max-h-[55vh]' />
          </Link>
        </div>
        <div className="summary sm:w-2/3 sm:mx-4">
          <div className='flex flex-col sm:flex-row justify-between space-y-5'>
            <div className='sm:w-2/3'>
              <h3 className='title font-bold py-2 '><Link className='hover:text-[#2874f0]' to={`/movie/${item.show.id}`}>{item.show.name}</Link></h3>
              Type: {item.show.type}
            </div>
            <div className="price flex flex-col justify-start">
              <p className='font-bold text-xl'>Rating : {item.show.rating.average?item.show.rating.average: "Not Rated"}</p>
              <a className='text-muted' href={item.show.url} target='__blank'>URL</a>
              <h2 className='text-xs text-green-700 font-semibold'> Status : {item.show.status}</h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterItems