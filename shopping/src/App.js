import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";
// import './App.css';
// import TopMenu from './components/TopMenu'
// import Products from './pages/Products'
import axios from 'axios'

// import { CartProvider } from './contexts/Cart'
import PostList from './pages/PostList';

// const Index = () => <h2>Home</h2>

function App() {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        // const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        // const response = await fetch(requestUrl)
        // const responseJSON = await response.json()
        // const { data } = responseJSON
        // console.log(data)
        // setPostList(data)
        axios.get('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1').then(res => setPostList(res.data.data))
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchPostList()
  }, [])

  return (
    // <CartProvider>
    //   <Router>
    //     <div className="App">
    //       <div>
    //         <TopMenu />
    //         <Route path="/" exact component={Index}/>
    //         <Route path="/products/" exact component={Products}/>
    //       </div>
    //     </div>
    //   </Router>
    // </CartProvider>
    <div className="app">
      <h1>React Hook - PostList</h1>
      <PostList posts={postList} />
    </div>
  );
}

export default App;
