import Post from './Post.jsx'

export default function PostList(){

const posts = [
  {
    id: 1,
    title: "React is Powerful",
    body: "React lets you build interactive UIs using components and state management.",
  },
  {
    id: 2,
    title: "Components Are Reusable",
    body: "Breaking your UI into components makes your code more organized and easier to maintain.",
  },
  {
    id: 3,
    title: "Props Enable Communication",
    body: "Props are passed from parent to child and allow you to customize each component's content.",
  },
  {
    id: 4,
    title: "Hooks Simplify Logic",
    body: "With hooks like useState and useEffect, you can write logic directly inside functional components.",
  },
];


  return(
    <div className='md:w-2/4'>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body}></Post>
      ))}
    </div>
  )
}