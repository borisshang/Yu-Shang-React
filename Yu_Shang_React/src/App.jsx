import { useState } from 'react'

import './App.css'
import Boxes from './Boxes.jsx'

export default function App() {

  const [countBlack, setCountBlack] = useState(0);

  return (
    <div>
      <h2>Count: {countBlack}</h2>
      <div className='grid-container'>
        <div className = 'grid'>
          <Boxes countBlack = {countBlack} setCountBlack = {setCountBlack}/>
          <Boxes countBlack = {countBlack} setCountBlack = {setCountBlack}/>
          <Boxes countBlack = {countBlack} setCountBlack = {setCountBlack}/>
          <Boxes countBlack = {countBlack} setCountBlack = {setCountBlack}/>
        </div>
      </div>
    </div>
  )
}

