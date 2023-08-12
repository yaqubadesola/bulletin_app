import {useSelector} from 'react-redux'
import {selectAllPosts} from "../postsSlice"
import AddPost from './AddPost'
const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const renderedPosts = posts.map(post => 
    (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    )
      
  )
  return (
    <section>
        <h2>Posts</h2>
        <AddPost/>
        {renderedPosts}
    </section>
  )
}

export default PostsList