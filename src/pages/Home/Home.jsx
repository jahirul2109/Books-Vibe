import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import Books from '../Books/Books';

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <Books data = {data}></Books>
    </div>
  )
}

export default Home