import Button from './Button.jsx'

export default function TagList(){

  const btns = [
    {id: 1, name: 'Click Tag BTN'},
    {id: 2, name: 'Click Tag BTN'},
    {id: 3, name: 'Click Tag BTN'},
    {id: 4, name: 'Click Tag BTN'},
    {id: 5, name: 'Click Tag BTN'},
    {id: 6, name: 'Click Tag BTN'}
  ];

  return(
    <div className='bg-sky-500 flex flex-wrap md:justify-center md:w-1/4'>
      {btns.map((btn) => (
        <Button key={btn.id} name={btn.name}></Button>
      ))}
    </div>
  )
}