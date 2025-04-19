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
  const [testCompVisibility, setTestCompVisibility] = useState(false)
  function hideShowTestComp() {
    setTestCompVisibility((prevVisibility): boolean => !prevVisibility)
  }
  const TestCompWProps = <TestComp
  imgUrl1="https://i1.sndcdn.com/artworks-000673270330-q0zeyj-t500x500.jpg"
  imgUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRZzBj-rOv7OjC0e-pKHG53aCUg482QO3Qw&s" />

  //state for props component
  const [propsFromFilevisibility, setPropsFromFilevisibility] = useState(false)
  function hideShowPropsComp() {
    setPropsFromFilevisibility((prevVisibility: boolean) => !prevVisibility)
  }
  // props using messages.json
  const propsFromFileWProps = Data.map(msg => 
    <PropsFromFile
    key={msg.id} 
    text={msg.text} author={msg.author} />)

  return (
    <>
      {/* renders comp onClick */}
      <button onClick={hideShowTestComp}>Hide/Show test component</button>
      {testCompVisibility ? TestCompWProps : ""}

      <hr />

      <button onClick={hideShowPropsComp}>Show/Hide messages (props)</button>
      {propsFromFilevisibility ? propsFromFileWProps : ""}

      <hr />
    </>
  )
}
