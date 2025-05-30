import './App.css'

// data
import data from './data/links.json'

// components
import Welcome from './components/Welcome'
import Components from './components/Components'
import Props from './components/Props'
import State from './components/UseState'
import UseEffect from './components/UseEffect'
import NavMenu from './components/NavMenu'

export default function App() {
  return (
    <>
      {/* page bg */}
      <div className='bg-gray-600 w-full min-h-screen flex justify-center'>

        {/* page container */}
        <div className='container'>

          {/* components */}
          <Welcome />
          <NavMenu />

          <hr className='border-white border-t-1 m-10' />

          <Components 
          title="1. Components"
          img={data.links[1]} />

          <hr className='border-white border-t-1 m-10' />

          <Props 
          title="2. Props"
          img={data.links[2]} /> {/* probably add conditionnal rendering after props ↓, but it's not really React directly */}

          <hr className='border-white border-t-1 m-10' /> 

          <State 
          title="3. useState"
          img={data.links[3]} />

          <hr className='border-white border-t-1 m-10' />

          <UseEffect 
          title="4. useEffect"
          img={data.links[4]} />

        </div>

      </div>
    </>
  )
}
