import Head from 'next/head'
import { useState, useEffect } from 'react'


const Server = () => {

  const [query, setQuery] = useState('')
  const [data, setData] = useState([])


  const fetchData = async () => {
    // const url = 'http://localhost:3000/api/user'
    const url = `/api/user?searching=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, [query])


  return (
    <div>
      <Head>
        <title>Server</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input
        type="text"
        className='inputField'
        placeholder='Searching...'
        onChange={e => setQuery(e.target.value.toLowerCase())}
      />


      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>

          {
            data.map(user => (

              <tr key={user.id}>

                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>

              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default Server