import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function github() {
  const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rishabhpandey2305').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-green-600 text-white p-4 text-3xl'>
      Github Name : {data.name}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default github

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/rishabhpandey2305')
  return response.json()
}


