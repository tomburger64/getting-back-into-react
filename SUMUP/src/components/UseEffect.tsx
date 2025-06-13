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

            <p className="text-white m-2 text-xl">That's when <code className="font-bold">useEffect</code> comes in:</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`useEffect(() => {
    console.log('Hello')
}, [])`} <br />
                </code>
            </div>

            <p className="text-white m-2 text-xl">useEffect's value is an <code className="font-bold">anonymous arrow function</code>, which runs our <code>console.log()</code>, before mentioning some kind of empty array " <code>[]</code> ".</p> <br />
            
            <p className="text-white m-2 text-xl">Here's the dumb "hard-learn" thing to know: <code className="font-bold">useEffect</code> always has a function for it's value, usually an anon arrow function <i>(anon = anonymous)</i>, or functions. <br />
            Meanwhile, the empty arrays "<code>[]</code>" are useEffect's key part. They actually mean when should the <code>console.log()</code> should be run.</p> <br />

            <p className="text-white m-2 text-xl">There's 3 ways of using the arrays, which depicts every way you can use <code className="font-bold">useEffect</code>:</p> <br />
            
            <p className="text-white m-2 text-2xl font-bold">· First way:</p>
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`// ↓ this is called "on mount", the code runs on the first render of the component only
useEffect(() => {
    console.log('Hello')
}, [])`} <br />
                </code>
            </div> <br />

            <p className="text-white m-2 text-2xl font-bold">· Second way:</p>
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`// simple useState setup ↓
// 2 buttons, one adds +1, the other decreases -1

const [count, setCount] = useState(0)
                
function increase() {
    setCount(prevCount => ++prevCount)
}
function decrease() {
    setCount(prevCount => --prevCount)
}

// - - - - -

// useEffect setup ↓
// when count updates, logs 'Hello'

useEffect(() => {
    console.log('Hello')
}, [count])

return (
    <>
        <h1>{count}</h1>
        <button onClick={increase}>+ increase 1</button>
        <button onClick={decrease}>- decrease 1</button>
    </>
)`} <br />
                </code>
            </div> <br />

            <p className="text-white m-2 text-xl">This code's a bit longer, so here's some more explaining: <br />
            We have a basic count that adds 1 / decreases 1 when pressing a button. It works using useState. <br />
            So in the <code>JSX</code>, there's buttons and a tag to show the count in.</p><br />

            <p className="text-white m-2 text-xl">As for the <code>useEffect</code> part, it runs a <code>console.log()</code> every time <b>whatever's inside the array is updated</b>. Here, that concerns the <b>count state variable</b>.</p> <br />

            <p className="text-white m-2 text-xl">What does an "update" really mean? <br />
            it means everytime a component is rendered (page load, button that makes it appear, etc), and anytime it (literally) is updated by React. <br />
            Here, since the count changes when a button is pressed and that it is displayed in the <code>JSX</code>, React updates it to match its value, so we don't see a value from the past.</p> <br />

            <p className="text-white m-2 text-2xl font-bold">· Third way: <br />
            <i className="text-sm font-normal">(rarely useful)</i></p>
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`// ↓ runs on every render / update of the component
// can easily create an infinite loop if not carefully used

useEffect(() => {
    console.log('Hello')
})`} <br />
                </code>
            </div> <br />

            <p className="text-white m-2 text-xl">Those are the <b>3</b> ways of using <code>useEffect</code>'s "magical" array <code>[]</code>.</p> <br />

            <p className="text-white m-2 text-xl">Lastly, there's just <b>one more essential thing</b> that we need to know about useEffect. <br />
            The "<code className="font-bold">cleanup</code>".</p> <br />

            <p className="text-white m-2 text-xl">The <code className="font-bold">cleanup</code> is needed for something that happens in the background of React, that we don't see in our frontend page yet can really make it lag if never used. <br />
            More specifically, since <code className="font-bold">useEffect</code> basically runs code when a <b>component renders</b> (gets updated / "on mount"), if some component were to be something that updates a lot and can be stopped from updating itself by user interaction, <code>useEffect</code> can act like you're shooting your own foot.</p> <br />

            <p className="text-white m-2 text-xl">Let's say we had a chrono component, that would update its time at every second. Let's say there was also a pause / resume button so that the user would be able to control the chrono. <br />
            Stopping and resuming the chrono would work properly, but after a while everything would start to slow down and lag.</p> <br />

            <p className="text-white m-2 text-xl">That's because there'd be several timers running at the same time. <br />
            But how is that even possible?</p> <br />

            <p className="text-white m-2 text-xl">Turns out, React behaves basically like this: <br /> <br />
            - Dev : "Hey React, listen for this event." <br />
            - React : <code>O.K.</code> <br />
            - Dev : "Also listen to this one ! Even if its the same one !" <br />
            - React : <code>O.K.</code> <br />
            - Dev : "And this one too !" <br />
            - React : <code>O.K.</code></p> <br />

            <p className="text-white m-2 text-xl">At some point, it's not that React will forget, it's that <b>it literally *won't* forget</b> (it's not a human after all). That means your RAM (your PC's "short term" memory) will overload and cause lags, buffers, and might break the website on the browser. <br />
            It's kind of like a loop that doesn't end.</p>

            <p className="text-white m-2 text-xl">Let's make an example by coding it from scratch to explain this concept, as we'll be done with useEffect afterwards.</p>

            <p className="text-white m-2 text-xl">let's make that chrono from earlier, which has a pause and resume button.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`// 

useEffect(() => {
    console.log('Hello')
}), []`} <br />
                </code>
            </div>


            <UseEffectExample />
        </>
    )
}