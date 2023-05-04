import React, { useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [searchVal, setSearchVal] = useState("");

    const onClick = () => {
        const hamItem = document.getElementById('hamItem');
        let dis = hamItem.style.display;
        if (dis === 'none') {
            hamItem.style.display = 'block';
        } else {
            hamItem.style.display = 'none';
        }
    };

    const onChange = (e) => {
        setSearchVal(e.target.value)
    }


    return (
        <div className='bg-[#2874f0] fixed top-0 right-0 left-0 z-30 '>
            <nav className=' max-w-[1700px] m-auto py-3 md:px-8 flex md:justify-evenly justify-between items-center '>
                <div className="hamburger ml-3 mr-2 flex md:hidden items-center" onClick={onClick}>
                    <div>
                        <div className="line h-0.5 w-3.5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-3.5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-3.5 bg-white my-0.5"></div>
                    </div>
                    <div>
                        <Link className='italic font-bold text-white px-2 text-xl flex items-center mr-1 cursor-pointer' to="/">RMovies</Link>
                    </div>
                </div>
                <div className="logo flex w-1/2">
                    <Link to="/" className='italic font-bold text-white px-2 text-xl items-center mr-1 cursor-pointer hidden md:flex'>RMovies</Link>
                    {/* <form action="/query" className='flex w-full' onSubmit={handleSubmit}> */}
                    <input type="text" name="search" id="search" placeholder='Search for movies by name or type by clicking on search icon' className='text-sm px-4 py-2 w-[90%] rounded-sm hidden md:block outline-none' onChange={onChange} value={searchVal} />
                    <Link to={`/search/${searchVal.toString()}`} onClick={() => { setSearchVal("") }} className="hidden md:block">
                        <i className="fas fa-search bg-none -translate-x-7 cursor-pointer pt-[0.65rem] text-[#2874f0] "></i>
                    </Link>
                    {/* </form> */}
                </div>
            </nav>

            <div className='bg-[#2874f0] md:hidden flex justify-center items-center -mt-1'>
                <Link to={`/search/${searchVal.toString()}`} onClick={() => { setSearchVal("") }}>
                    <i className="fas fa-search bg-none translate-x-7 cursor-pointer text-[#2874f0]"></i>
                </Link>
                <input type="text" name="search" id="search" placeholder='Search for movies by name or type by clicking on search icon' className='text-sm px-9 py-2 w-full my-1 mr-3.5 rounded-sm ' onChange={onChange} value={searchVal} />
            </div>
        </div>
    );
};

export default Navbar;
