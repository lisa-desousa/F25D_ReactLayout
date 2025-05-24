export default function SideBar(){

  const HoverLinkStyle = "hover:text-purple-300 hover:cursor-pointer m-8"

  return (
    <div className="bg-sky-500 text-purple-50 text-3xl p-5 h-auto w-screen md:h-auto md:w-1/4">
      <h2 className={HoverLinkStyle}>Uppgift 1</h2>
      <h2 className={HoverLinkStyle}>Uppgift 2</h2>
    </div>
  )
}

