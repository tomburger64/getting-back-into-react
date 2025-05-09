import { useEffect, useRef, useState } from "react"

export default function App() {
  const [name, setName] = useState('')
  
  // useref is kind of like state, but returns an object instead of an array
  // by default has one property called "current", here set to 0
  const renderCount = useRef<number>(1)
  // runs this on every render of App
  // NOTE: running app on strict mode makes react render components twice, hence the count going from 1 → 3 when inputting the first char in the input
  useEffect(() => {
    renderCount.current++
  })



  const inputRef = useRef<HTMLInputElement>(null)
  function focus() {
    inputRef.current?.focus()
  }

  return (
    <>
      {/* state gets updated to the input value */}
      {/* almost all tags have a ref prop */}
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name's {name}</div>
      {/* renderCount is an object, need to access the wanted property to render it ↓ */}
      <div>I rendered {renderCount.current} times</div>

      <button onClick={focus}>Focus</button>
    </>
  )
}
