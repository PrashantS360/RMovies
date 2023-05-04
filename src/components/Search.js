import React from 'react'
import FilterItems from './FilterItems'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Search = ({setProgress}) => {
    const location = useLocation();
    const [searchItems, setSearchItems] = useState([]);
    let type = location.pathname.substring(8, location.pathname.length);
console.log(type);
    const getItems = async () => {
        setProgress(30);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/getmovies`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        setProgress(60);
        const json = await response.json();
        const filter_items = [];
        for (let i = 0; i < json.length; i++) {
            if (json[i].show.type.toLowerCase() === type.toLowerCase() || json[i].show.name.toLowerCase().includes(type.toLowerCase())) {
                filter_items.push(json[i]);
            }
        }
        setProgress(90);
        setSearchItems(filter_items);
        console.log(filter_items);
        setProgress(100);
    }

    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, [location.pathname])

    return (
        <div className='flex justify-center my-24 md:my-16'>
            <div className="max-w-[1700px] w-full my-2 mx-11">
                <h2 className='font-bold text-2xl'>{searchItems.length} Search Results Found For Your Query</h2>
                <div className=''>
                    {
                        searchItems.map((item) => {
                            return <FilterItems key={item.show.id} item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search