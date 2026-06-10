import React from 'react'
import { useLoaderData } from 'react-router'
import BChart from '../Chart/BChart';

const PageToread = () => {
    const pageData = useLoaderData();
  return (
    <div className='w-11/12 flex-1 min-h-screen mx-auto'>
            <title>HOME || Pages</title>
        <h1>Hello World</h1>
        <BChart pageData = {pageData}></BChart>
    </div>
  )
}

export default PageToread