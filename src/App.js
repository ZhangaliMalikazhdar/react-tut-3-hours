import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'desc'},
    {id: 2, title: 'Javascript 2', body: 'desc'},
    {id: 3, title: 'Javascript 3', body: 'desc'},
  ])

  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Name of post'/>
        <input type='text' placeholder='desc of post'/>
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title='List of posts 1' />
    </div>
  );
}

export default App;
