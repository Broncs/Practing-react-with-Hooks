import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input value={id} type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>FetchPost</button>
      {console.log(data)}
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default DataFetching;
