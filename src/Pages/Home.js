import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Home = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        loadData()
    }, [])
    async function loadData() {
        const res = await axios.get("https://restcountries.com/v3.1/all")
        console.log(...res.data)
    }
    
  return (
    <div>
        <h1>welcome to the final project</h1>
    </div>
  )
}

export default Home