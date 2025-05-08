import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [resourceType, setResourceType] = useState('posts')



  // useEffect basically runs code once something specified (or not) has rendered

  // ↓ logs this at every render
  console.log('render')

  /* ↓ logs text at every state rendered */
  useEffect(() => {
    console.log('resource type changed')
  }, [resourceType])
  
  /* ↓ logs text on first render rendered */
  useEffect(() => {
    console.log('"on mount" render')
  }, [])

  /* sum up:
  * - nothing after useEffect's code : code runs on each render of the component
  * - empty array after comma : code runs on first render of the component ("on mount")
  * - thing in array : code runs when [thing] changes
  **/



  // ↓ practical fake api call example

  // ik you should put state at the top but idc this is for learning only
  // empty array value by default
  const [items, setItems] = useState([])

  // calls url w/ specified state var endpoint when resourceType renders
  // call response converted into json, becomess the state value
  // in the jsx, maps through & renders every item in the state
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])



  // more complicated example


  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      
      <h1>{resourceType}</h1>
      <details>
        <summary>json data (click to show / hide)</summary>
        {items.map(item => <pre key={Math.random()}>{JSON.stringify(item)}</pre>)}
      </details>
    </>
  )
}
