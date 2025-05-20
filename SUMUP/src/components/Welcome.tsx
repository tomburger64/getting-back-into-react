import reactLogo from '../assets/react.svg'

export default function Welcome() {
    return(
        <>
            <h1 className="main-title m-5 my- text-5xl text-center text-white whitespace-nowrap leading-tight">Welcome !</h1>
            <h3 className="text-white m-2 text-center text-xl">Here you'll find individual components explanations that I learned so far !</h3>

            <p className="text-white m-2 text-center text-xl">This is a way for me to solidify what I know, and also show it with examples, and it'll also motivate me to ad more concepts here</p>
            <div className='flex justify-center'><img className='w-20 mt-5' src={reactLogo} alt="" /></div>
        </>
    )
}