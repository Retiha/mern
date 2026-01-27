import React from 'react'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Parent from '../components/Parent'
import Form from '../hooks/Form'

const Home = () => {
  return (
    <div> 
    <Profile name="Reti" age={20} skills={["HTML","CSS","JS","PYTHON","NODE"]}/>
    <Form/>
    <Parent/>
    <State/>
    </div>
  )
}

export default Home
