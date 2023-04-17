import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'desc'},
    {id: 2, title: 'Javascript 2', body: 'desc'},
    {id: 3, title: 'Javascript 3', body: 'desc'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            {value: 'title', name: 'by name'},
            {value: 'body', name: 'by description'},
          ]}
        />
      </div>
      {posts.length
        ? 
        <PostList remove={removePost} posts={posts} title='List of posts 1' />
        : 
        <h1 style={{textAlign: 'center'}}>
          posts is empty
        </h1>
      }
    </div>
  );
}

export default App;
