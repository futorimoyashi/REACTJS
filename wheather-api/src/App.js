import React, {useState, useEffect} from 'react';
import axios from 'axios'
import queryString from 'query-string'

import PostList from './Component/PostList'
import Pagination from './Component/Pagination'

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  })
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filter)
        axios.get(`http://js-post-api.herokuapp.com/api/posts?${paramString}`)
          .then(function(res) {
            setPostList(res.data.data)
            setPagination(res.data.pagination)
          })
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchPostList()
  }, [filter])

  function handlePageChange(newPage) {
    console.log(newPage)
    setFilter({
      ...filter,
      _page: newPage
    })
  }

  return (
    <div className="App">
      <PostList posts={postList} />
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
