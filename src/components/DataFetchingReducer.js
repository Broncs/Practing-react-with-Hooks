import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { loading: false, error: '', post: action.payload };
    case 'FETCH_ERROR':
      return { loading: false, error: 'Something went wrong', post: {} };
  }
};

const DataFetchingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div>
      {state.loading ? 'CARREGANDO' : state.post.title}
      {state.error && state.error}
    </div>
  );
};

export default DataFetchingReducer;
