import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const data = await response.json();
            setData(data);
        }
        getData()
    })
  return (
    <div>
        <ul>
            {data.map((element, i) => {
                return <li key={i}>{element.email} <li>{element.body}</li></li>
            })}
        </ul>
    </div>
  )
}

export default FetchDataEffect