import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Items = ({ itemDetails }) => {
    const { show } = itemDetails;
    const [imgLink, setImgLink] = useState("default.jpeg");
    useEffect(() => {
        if (show.image && show.image.medium) {
            setImgLink(show.image.medium);
        }
    }, [show])


    return (
        <div className='flex flex-col justify-center items-center px-2 m-2'>
            {imgLink &&
                <Link to={`/movie/${show.id}`}><img src={imgLink} className="cursor-pointer  h-[16vh] lg:h-[26vh] w-auto  p-1" alt="No image to display" /></Link>}

            <div className="recommended cursor-pointer text-center mt-3">
                <p className='text-green-700 text-sm my-1'>{show.name}</p>
                <h3 className='text-[0.9rem] font-semibold'>{show.language}</h3>
                <p className='text-gray-500 text-sm px-1'>{show.rating.average}</p>
            </div>
        </div>
    )
}

Items.defaultProps = {
    recmd: false
}

Items.propTypes = {
    recmd: PropTypes.bool
}

export default Items;