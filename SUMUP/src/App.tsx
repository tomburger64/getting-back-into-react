import './App.css'

// data
import data from './data/links.json'

// components
import Welcome from './components/Welcome'
import NavMenu from './components/NavMenu'
import Components from './components/Components'
import Props from './components/Props'
import State from './components/UseState'
import UseEffect from './components/UseEffect'

// todo:
/**
 * don't show all concepts at once, make NavMenu work with useState
 * useEffect
 * useRef?
 * idk I'll google it or ask AI for what'd be the most useful to learn
 */

export default function App() {
  return (
    <>
      {/* page bg */}
      <div className='bg-gray-600 w-full min-h-screen flex justify-center' id='top'>

        {/* page container */}
        <div className='container'>

          {/* back to the top button */}
          <a className='bg-gray-500 w-15 aspect-square rounded-3xl fixed bottom-0 right-0 m-5 text-3xl flex items-center justify-center' href='#top'>↑</a>

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
