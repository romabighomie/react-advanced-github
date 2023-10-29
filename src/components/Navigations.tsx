import React from 'react';
import {Link} from "react-router-dom";

function Navigations() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h3 className='font-bold'>Github Search</h3>

            <span>
                <Link to='/' className='mr-2'>Home</Link>
                <Link to='/favourites'>Favorites</Link>
            </span>
        </nav>
    );
}

export default Navigations;