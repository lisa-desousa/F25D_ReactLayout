

export default function Post(props){

  return(
    <div className="text-indigo-800 bg-purple-50 p-3 text-center border rounded-lg m-3">
      <h2 className="text-3xl/loose">{props.title}</h2>
      <hr></hr>
      <p className="text-2xl/loose">{props.body}</p>
    </div>
  )
}