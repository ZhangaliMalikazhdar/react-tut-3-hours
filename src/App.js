import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'desc'},
    {id: 2, title: 'Javascript 2', body: 'desc'},
    {id: 3, title: 'Javascript 3', body: 'desc'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python 1', body: 'desc'},
    {id: 2, title: 'Python 2', body: 'desc'},
    {id: 3, title: 'Python 3', body: 'desc'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title='List of posts 1' />
      <PostList posts={posts2} title='List of posts 2' />
    </div>
  );
}

export default App;
