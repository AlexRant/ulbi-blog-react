import React, { useState } from 'react'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/button/MyButton'

//пропсы передаются сверху вниз, поэтому из Апп через пропс create получим функцию
export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      {/* управляемый компонент */}
      <MyInput
        value={post.title}
        // onChange={e => setTitle(e.target.value)}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title"
      />
      {/* неурпавляемый - неконтролируемый компонент */}
      {/* <MyInput 
          ref={bodyInputRef}
          type="text"
          placeholder="Post description" 
        /> */}
      <MyInput
        value={post.body}
        // onChange={e => setPostBody(e.target.value)}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  )
}
