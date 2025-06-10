import UseEffectExample from "./useEffect-example/UseEffectExample";

type Props={
    title: string;
    img: string;
}

export default function UseState(props:Props) {
    return(
        <>
            <h3 className="text-white text-3xl m-5" id="useEffect">{props.title}</h3>
            <img className="w-md mx-auto" src={props.img} alt="" />

            <p className="text-white m-2 text-xl">useEffect is used for "side effects" to happen once a component has loaded. On the first load only, or on every load, it can execute our code.</p> <br />

            <p className="text-white m-2 text-xl">Check this out:</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`console.log('Hello')
// ↑ this runs at every render of the component
// reloading the page means the console.log will restart`} <br />
                </code>
            </div> <br />

            <p className="text-white m-2 text-xl">That's when <code className="font-bold">useEffect</code> comes in.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`<h1 className='font-bold text-xl text-white'>{pizza.pizza}</h1>`} <br />
                </code>
            </div>


            <UseEffectExample />
        </>
    )
}