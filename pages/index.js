import Head from 'next/head'
import { useState } from 'react'
import { Users } from '../constants/userDB';


export default function Home() {

  
  const [query, setQuery] = useState('')


  return (
    <div>
      <Head>
        <title>Searching</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <input
        type="text"
        className='inputField'
        placeholder='Searching...'
        onChange={e => setQuery(e.target.value.toLowerCase())}
      />


      <div className='dataContainer'>
        {
          Users.filter(user => user.first_name.toLowerCase().includes(query))
            .map(user => (
              <div key={user.id} className="userInfo">
                {user.id}.  {user.first_name}
              </div>
            ))
        }
      </div>
    </div>
  )
}
