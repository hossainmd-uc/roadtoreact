import React from 'react'
import { useState, useEffect } from 'react';

const useFetch = (link) => {

  const [data, setData] = useState([]);

  useEffect (() => {
    fetch(link).
    then((res) => res.json()).then((res) => setData(res))
  }, []);

  return data;
}

export default useFetch;