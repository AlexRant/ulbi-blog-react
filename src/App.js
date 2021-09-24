import React, {useRef, useState} from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import { PostForm } from './components/PostForm';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
// import { MyButton } from './components/UI/button/MyButton';
// import { MyInput } from './components/UI/input/MyInput';
import { MySelect } from './components/UI/select/MySelect';
import './styles/App.css';

function App() {

  // const [likes, setLikes] = useState(5)
  // const [value, setValue] = useState('Dummy Text')
  const [posts, setPosts] = useState([
    {id: 1, title: 'HTML', body: 'HTML - markup language'},
    {id: 2, title: 'CSS', body: 'CSS - cascading style sheet'},
    {id: 3, title: 'JavaScript', body: 'JS - programming language'},
    {id: 4, title: 'REACT', body: 'REACT - JS library to create user interfaces'}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [serchQuery, setSearchQuery] = useState('')

  //HOOOOKKK
  // const [title, setTitle] = useState('')
  // const [body, setPostBody] = useState('')
  //const [post, setPost] = useState({title: '', body: ''})
  // const bodyInputRef = useRef() //can get access to the body element

  // const addNewPost = (e) => {
  //   e.preventDefault();
  //   // console.log(title);
  //   // console.log(postBody);
  //   // console.log(bodyInputRef.current.value)
  //   // const newPost = {
  //   //   id: Date.now(),
  //   //   title,
  //   //   body
  //   // }
  //   // console.log(newPost)
  //   // с помощью setPosts создаем новый массив куда разворачиваем posts и в конец добавляем newPost
  //   setPosts([...posts, {...post, id: Date.now()}])
  //   // setTitle('')
  //   // setPostBody('')
  //   setPost({title: '', body: ''})
  // }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //получаем post из дочернего компонента
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">

      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <input type="text" />
        <MySelect
          value={selectedSort}
          onChange={sortPosts} 
          defaultValue="Sort by"
          options={[
            {value: 'title', name: 'By Title'},
            {value: 'body', name: 'By Description'},
          ]}
        />
        
      </div>
      {posts.length 
      ? <PostList remove={deletePost} posts={posts} title="JavaScript Posts"/>
        
      : <div> 
          <h1 style={{color: 'teal', margin: '20px 0', textAlign: 'center'}}>
              There are no posts to display
          </h1>
          <h2 style={{color: 'teal', margin: '10px 0', textAlign: 'center'}}>Post something</h2>
        </div>
      }
      
      
    </div>
  );
}

export default App;
