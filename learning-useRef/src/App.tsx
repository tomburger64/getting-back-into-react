import { useState } from "react"

export default function App() {
  const [name, setName] = useState('')

  return (
    <>
      {/* state gets updated to the input value */}
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name's {name}</div>
    </>
  )
}
