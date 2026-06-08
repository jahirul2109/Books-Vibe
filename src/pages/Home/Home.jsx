import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import Books from '../Books/Books';
import Banner from '../../compontes/Header/Banner';

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div className=''>
      <title>HOME</title>
      <Banner data = {data}></Banner>
      <Books data = {data}></Books>
    </div>
  )
}

export default Home