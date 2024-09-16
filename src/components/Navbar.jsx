import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const handleClick = (link) => {
    switch(link) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/sunny-vinay/", '_blank', 'noopener,noreferrer');
        break;
  
      case "github":
        window.open("https://github.com/sunnyyvinay", '_blank', 'noopener,noreferrer');
        break;
    }
  }

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <button onClick={() => handleClick("linkedin")}>
              <FaLinkedin />
            </button>
            
            <button onClick={() => handleClick("github")}>
              <FaGithub />
            </button>
        </div> 
    </nav>
  )
}

export default Navbar;