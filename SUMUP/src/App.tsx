import './App.css'
import Welcome from './components/Welcome'
import Components from './components/Components'

export default function App() {
  return (
    <>
      {/* page bg */}
      <div className='bg-gray-700 w-full min-h-screen p-5 flex justify-center'>

        {/* page container */}
        <div className='bg-gray-600 container'>

          {/* components */}
          <Welcome />

          <p className='main-title text-white text-4xl text-center my-5'>Here we go !</p>
          <hr className='w-40 mx-auto border-white border-t-1' />

          <Components />

        </div>

      </div>
    </>
  )
}
