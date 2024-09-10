import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/pal-boy')
     .then(response => response.json())
     .then(data => {
        // console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div>
        <div className='flex justify-around bg-gray-600 p-4'>
            <div>
                <img src={data.avatar_url} alt="Git picture" width={400} />
            </div>
            <div className='m-2 bg-gray-600 text-white p-4 text-3xl'>
                <h2><span className='text-orange-600'>ID :</span> {data.id}</h2>
                <h2><span className='text-orange-600'>Name :</span> {data.name}</h2>
                <h3><span className='text-orange-600'>Repositries :</span> {data.public_repos}</h3>
                <h3><span className='text-orange-600'>Github followers:</span> {data.followers}</h3>
                <p><span className='text-orange-600'>Bio :</span> {data.bio}</p>
            </div>
        </div>
        <h1 className='text-4xl text-blue-500 m-5'>The above data is coming from the the GitHub API. It is not wriiten manually in the code.</h1>
    </div>
  )
}

export default Github
