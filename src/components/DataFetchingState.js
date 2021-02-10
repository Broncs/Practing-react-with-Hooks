import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        setPosts({});
        setError('Something went wrong!');
      });
  }, []);

  return (
    <div>
      {loading ? 'Loading post' : posts.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingState;
