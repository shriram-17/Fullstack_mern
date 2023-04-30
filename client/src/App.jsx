import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userpage from './userpage'
import UserForm from './Userform'
import Userfetch from './fetchuser'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Userpage route="user"/>
      <UserForm/>
      <Userfetch/>
    </>
  )
}

export default App
