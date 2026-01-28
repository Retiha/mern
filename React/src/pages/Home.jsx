import React, { use } from 'react'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import { Link } from 'react-router-dom'
import { userContext } from '../App'
import { useState } from 'react'
const Home = () => {
    const [user,setuser]=useState("Reti");
  return (
    <div> 
      <Link to="/form">Form</Link><br />
      <Link to="/reducer">Reducer</Link><br />
      <Link to="/state">State</Link><br />
      <userContext.Provider value={user}>
    <Profile age={20} skills={["HTML","CSS","JS","PYTHON","NODE"]}/>
    </userContext.Provider>
    
    <Parent/>
    
    </div>
  )
}

export default Home
