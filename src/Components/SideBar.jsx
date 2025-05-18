export default function SideBar(){

  const HoverLinkStyle = "hover:text-purple-300 hover:cursor-pointer m-8"

  return (
    <div className="bg-emerald-600 text-purple-50 text-2xl p-5 h-auto w-screen md:h-screen md:w-80">
      <h2 className={HoverLinkStyle}>Uppgift 1</h2>
      <h2 className={HoverLinkStyle}>Uppgift 2</h2>
    </div>
  )
}

