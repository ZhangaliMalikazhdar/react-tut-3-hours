import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'desc'},
    {id: 2, title: 'Javascript 2', body: 'desc'},
    {id: 3, title: 'Javascript 3', body: 'desc'},
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text' 
          placeholder='Name of post'
        />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text' 
          placeholder='desc of post'
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title='List of posts 1' />
    </div>
  );
}

export default App;
