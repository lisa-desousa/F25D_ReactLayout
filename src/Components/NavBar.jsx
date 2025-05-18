import {useState} from "react";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <nav className="bg-teal-600 text-purple-50 text-5xl p-3 w-screen min-h-30">
      <button onClick={handleClick}>
        Menu
      </button>
      {isClicked && (
        <div className="text-2xl m-3">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      )}
    </nav>
  );
}
