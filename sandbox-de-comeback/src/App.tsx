// css
import './App.css'

// components
import PropsFromFile from './components/PropsFromFile'
import TestComp from './components/TestComp'

//data
import Data from './data/messages.json'

// react lib
import { useState } from 'react'



export default function App() {

  // state for text component
  const [visibility, setVisibility] = useState(false)
  function hideShow() {
    setVisibility((prevVisibility): boolean => !prevVisibility)
  }
  const TestCompWProps = <TestComp
  imgUrl1="https://i1.sndcdn.com/artworks-000673270330-q0zeyj-t500x500.jpg"
  imgUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRZzBj-rOv7OjC0e-pKHG53aCUg482QO3Qw&s" />

  // props using messages.json
  const messages = Data.map(msg => 
    <PropsFromFile
    key={msg.id} 
    text={msg.text} author={msg.author} />)

  return (
    <>
      {/* renders comp onClick */}
      <button onClick={hideShow}>Hide/Show test component</button>
      {visibility ? TestCompWProps : ""}

      <hr />

      <button>Show/Hide messages (props)</button>
      {messages}
    </>
  )
}
