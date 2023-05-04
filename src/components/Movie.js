import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BsLink, BsCheckCircleFill } from 'react-icons/bs';

const Movie = () => {
    const location = useLocation();
    let iCode = location.pathname.substring(7, location.pathname.length);
    const [itemDetails, setItemDetails] = useState({ show: {} });
    const [found, setFound] = useState(false);

    const getItem = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/getmovies`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // setProgress(30);
        const json = await response.json();
        for (let i = 0; i < json.length; i++) {
            if (json[i].show.id.toString() === iCode) {
                setItemDetails(json[i]);
                setFound(true);
                break;
            }
        }
    }


    const [imgLink, setImgLink] = useState("");
    useEffect(() => {
        getItem();
        // eslint-disable-next-line
        if (itemDetails.show.image && itemDetails.show.image.original) {
            setImgLink(itemDetails.show.image.original);
        }
    }, [itemDetails])


    return (
        <>
            {found && <div className="flex justify-center my-20">
                <section className="max-w-[1700px] flex flex-col my-8 md:my-0 sm:flex-row mx-3 space-x-3 w-full">
                    <div className='my-0.5 sm:w-1/3 border-[1px] border-gray-300 p-4 flex  items-center justify-between flex-col min-h-[85vh] h-fit'>
                        <img src={imgLink} className=' max-h-[70vh] w-auto' alt="" />
                        <div className='flex flex-col lg:flex-row justify-evenly w-full my-2 '>
                            <a href={itemDetails.show.url} className='lg:w-[46%] font-semibold py-3 rounded-sm px-3 text-white bg-[#ff9f00] flex items-center justify-center my-1' target='__blank'><BsLink className="mx-2" /><span >URL</span> </a>
                        </div>
                    </div>
                    <div className='sm:w-2/3'>
                        <div>
                            <h2 className='my-1 font-semibold text-2xl'>{itemDetails.show.name}</h2>
                            <p className='flex'>
                                <span className="rating bg-green-700 text-white text-bold w-fit text-[0.8rem] pl-1.5 px-1 rounded-sm">{itemDetails.show.rating.average ? itemDetails.show.rating.average : "Not Rated"}</span>
                                <span className='text-gray-500 text-sm px-1 hidden sm:block'>{itemDetails.show.type}</span>
                            </p>
                            <p className='text-green-700 text-sm my-1 font-semibold'>{itemDetails.status}</p>
                            <p className='flex items-end'>
                                <span className='mr-4'>{itemDetails.show.runtime?itemDetails.show.runtime + " min":"No Runtime"}</span>
                                <span className='text-green-700 my-1 font-semibold mx-2'><BsCheckCircleFill /></span>
                            </p>
                            <div className='  mt-5 mb-11'>
                                <h2 className='text-lg font-semibold '>Summary : </h2>
                                <div className="flex" dangerouslySetInnerHTML={{ __html: itemDetails.show.summary }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>}
            {!found &&
                <div className='my-40 mx-10 font-bold text-4xl'>No Result Found</div>
            }
        </>
    )
}

export default Movie;