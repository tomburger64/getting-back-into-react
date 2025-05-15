import './App.css'
import Welcome from './components/Welcome'

export default function App() {
  return (
    <>
      {/* page bg */}
      <div className='bg-gray-400 w-100% p-5 flex justify-center'>

        {/* page container */}
        <div className='bg-yellow-300 container'>

          {/* components */}
          <Welcome />

          <br />
          <br />
          <br />

          <Welcome />
          <hr />
          <Welcome />
  
          <div><Welcome /></div>

        </div>

      </div>
    </>
  )
}
