"use client";
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
const Navbar = () => {
    const [refresh, setRefresh] = useState(false);

    // Function to handle link click
    const handleClick = () => {
        // Simulate clicking on the link
        // You can add your own logic here to handle link click
        setRefresh(true);
    };

    // Function to handle page refresh
    const handleRefresh = () => {
        // Refresh the page
        window.location.reload();
    };
  return (
      <nav className="flex items-center justify-between p-5 lg:px-96 text-xl text-gray-400">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600"><Link href="/" onClick={handleRefresh}>DocNet</Link></h1>


      </nav>
  )
}

export default Navbar
