
import './App.css'
import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar"
import TagList from './Components/TagList'
import PostList from './Components/PostList'

function App() {

  return (
  <div>
    <NavBar />

    <div className='md:flex'>
      <SideBar />

      <PostList />
    
      <TagList />

    </div>

  </div>
  )
}

export default App;
