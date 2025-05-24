import { useState } from "react";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const HoverLinkStyle = "hover:text-purple-300 hover:cursor-pointer m-8"
  const HoverLinkStyleBtn = "hover:text-purple-300 hover:cursor-pointer m-8 text-4xl md:hidden"
  const ClickedStyleBtn = "text-purple-300 hover:cursor-pointer m-8 text-4xl md:hidden"

  return (
    <nav 
      className="bg-indigo-800 text-purple-50 p-3 w-screen min-h-30 text-center">

      <h1 className="text-6xl">F25D - React Layout</h1>

      <button
        onClick={handleClick}
        className={isClicked ? 
        ClickedStyleBtn : HoverLinkStyleBtn}>
        Menu
      </button>

      <div
        className={`text-2xl 
          ${isClicked 
          ? 'block' 
          : 'hidden'}
          md:flex md:justify-center md:items-center md:gap-20`}>
        <h3 className={HoverLinkStyle}>Home</h3>
        <h3 className={HoverLinkStyle}>About</h3>
        <h3 className={HoverLinkStyle}>Contact</h3>
      </div>
    </nav>
  );
}
