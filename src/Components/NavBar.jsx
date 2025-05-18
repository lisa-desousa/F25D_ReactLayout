import { useState } from "react";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const HoverLinkStyle = "hover:text-purple-300 hover:cursor-pointer m-8"

  return (
    <nav 
      className="bg-teal-600 text-purple-50 text-5xl p-3 w-screen min-h-30 
      md:flex md:items-center md:justify-end">

      <button
        onClick={handleClick}
        className={`${HoverLinkStyle} md:hidden`}>
        Menu
      </button>

      <div
        className={`text-2xl 
          ${isClicked 
          ? 'block' 
          : 'hidden'}
          md:flex md:justify-end md:items-center md:gap-20  md:mr-20`}>
        <h3 className={HoverLinkStyle}>Home</h3>
        <h3 className={HoverLinkStyle}>About</h3>
        <h3 className={HoverLinkStyle}>Contact</h3>
      </div>
    </nav>
  );
}
