export default function Button(props){

  const btnStyle = "text-2xl cursor-pointer border text-center p-5 m-5 text-purple-50 hover:text-purple-300 rounded-3xl hover:shadow-2xl"

  function handleClick(){
    console.log('button clicked!');
  }

  return(
    <div className="w-1/2 md:w-fit">
      <button 
        className={btnStyle}
        onClick={handleClick}>{props.name}</button>
    </div>
  )
}