import StateMenu from "./useState-example/StateMenu"
import rawStateMenu from "./useState-example/StateMenu?raw"

import howStateWorks from '../assets/how-useState-works.png'
import dataFields from '../assets/data-fields.png'

type Props = {
    title: string,
    img: string
}

export default function UseState(props: Props) {
    return(
        <>
            <h3 className="text-white text-3xl m-5" id="useState">{props.title}</h3>
            <img className="w-md mx-auto" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">useState is the first and most common "hook". As their name implies, hooks are gonna be ways of waiting for something to happen, to make something happen. Could be an event, like clicking a button, or might as well be the hover of an image.</p> <br />

            <p className="text-white m-2 text-lg">Let's get right into it. We'll first need to import useState, just like how we did with the previous imports from the previous React concepts examples.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {'import { useState } from "React"'} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg">Notice we're deconstructing the import to bring just useState, and not the whole <code>"react"</code> library. This is part of must-have good practices in React, for performance and code quality in general!</p> <br />

            <p className="text-white m-2 text-lg">Then, we'll start setting up our useState, by destructuring it as it is an array:</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {'const [pizza, setPizza] = useState("a pizza")'} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg"><code className="font-bold">useState</code> is used by being destructured when you set it up, because <code className="font-bold">useState</code> needs the 2 elements we're destructuring to function properly: a variable, here "<code className="font-bold">pizza</code>", and a function: "<code className="font-bold">setPizza</code>". <br />
            Notice there's some text after "<code>useState</code>" in the parentheses ( ). Whatever you put inside will be the default value of useState. Could be a number, text, an array, an object, whatever:</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {'// examples'} <br />
                {'const [pizza, setPizza] = useState("a pizza")                           //text'} <br />
                {'const [pizza, setPizza] = useState(5)                                   //number'} <br />
                {'const [pizza, setPizza] = useState(true)                                //boolean'} <br />
                {'const [pizza, setPizza] = useState([1, 2, 3])                           //array'} <br />
                {'const [pizza, setPizza] = useState({ pizza: stuffed crust pizza })      //object'} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg">The vriable and the function must always have the same name, except the function has to have "<code className="font-bold">set</code>" at its beginnning. <br />
            We need the two unstructured elements, the variable and the function, because state works the following way:</p>

            <img className="w-xl max-w-10vw mx-auto" src={howStateWorks} alt="" />

            <p className="text-white m-2 text-lg">In short, useState's variable is what holds whatever you'd want to show in your JSX. <br />
            But it's different from a simple variable, as you can use the <code className="font-bold">useState function</code> to change the <code className="font-bold">useState variable</code> whenever you want it to happen (button press, or any ohter kind of event).</p> <br />

            <p className="text-white m-2 text-lg">The particularity of it is that to change the state value, you always have to pass through its function, which has to be called in another function to keep the naming and code clear.</p> <br />

            <p className="text-white m-2 text-lg">For example, we could want a function that adds +1 to the state value, whlie having another that decrements -1. That would require 2 different functions, that pass through the useState function. That would make working a simple count.</p> <br />

            <p className="text-white m-2 text-lg">Let's use our state with the goal of displaying a different pizza on a button's click, while keeping the pizza theme from the previous <a href="#props" className="text-blue-200"><code className="font-bold underline">props</code></a> React concept seen earlier.</p> <br />

            <p className="text-white m-2 text-lg">That means we can already ready our JSX to hold the data we want when we take a look at our <a className="text-blue-200 underline" href="#MOCKUP-DATA-SETUP">JSON mock data</a>. (← click for the setup part if you don't have the mock data). <br />
            Let's take a look:</p>

            <img className="w-xl mx-auto" src={dataFields} alt="" />

            <p className="text-white m-2 text-lg">We know we'll need placeholders for the "<code className="font-bold">pizza</code>" (pizza name), the <code className="font-bold">description</code> and the <code className="font-bold">price</code>. <br />
            That means we can ready that up in our JSX!</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`<div className='flex flex-col text-center max-w-96'>
    <h1 className='font-bold text-xl text-white'>{pizza.pizza}</h1>
    <div className='flex flex-col items-center justify-center border-5 rounded-lg p-5 m-2 border-white'>
        <p className='text-white'>{pizza.description}</p>
        <hr className='w-46 border-white m-2' />
        <p className='text-white italic font-bold'>{pizza.price}€</p>
    </div>
</div>`} <br />
                </code>
            </div>
            <p className="text-white m-2 text-md italic">Reminder: the examples use TailWind CSS classes, feel free to do what you want with the css as this guide isn't about CSS but getting how React concepts work</p> <br />

            <p className="text-white m-2 text-lg">And for the more technical part of how we're going to use our State "dynamically", we're going to make a few buttons for a few pizzas from our data, and each will display the according pizza's data on click. <br />
            Let's add some buttons to our JSX.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`<ul className="flex flex-col w-46 gap-5">
    <button>
            <li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center'>Pizza pepperoni</li>
    </button>

    <button>
        <li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center' >Pizza triple cheese</li>
    </button>

    <button>
        <li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center'>Pizza salmon & cream</li>
    </button>
</ul>`} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg">Now, in vanilla JS & HTML, to add an "event listener" to run some code whenever the user will do something, like click a button for example, you'd normally do something like this: </p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`<button id="myButton">Click me</button>
           
<-- js ↓ !-->
<script>
    document.getElementById("myButton").addEventListener("click", function () {
        alert("Button clicked!");
    });
</script>`} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg">Doing this might not seem very long to write with habit, but React still makes it faster. <br />
            React has a less "boilerplate", meaning it's more down to writing what you want to do without writing the "extra steps". Kind of the difference between coding in <code>Python</code> and something like <code>Java</code> or a <code>C</code> language.</p> <br />

            <p className="text-white m-2 text-lg">Take a look at how it's done:</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`export default function Component() {

    function myFunction() {
        alert('This is how make a simple click event in React!')
    }

    return(
        {/* ↓ makes an alert show up when clicking the button */}
        <button onClick={myFunction}>Click me</button>
    )
}`} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg">Basically, we make a function that will run whenever the event will be toggled. <br />
            Make sure the JS is written <b>above the <code>return()</code> part</b> of the component, and then use the magic <b>curly braces (" {"{ }"} ")</b> to <b>set the function as the value of the JSX event</b> (" <code>onClick</code> " in the above example).</p> <br />

            <p className="text-white m-2 text-lg">This is basically how you link the Javascript code to actually make things move the JSX !</p> <br />

            <p className="text-white m-2 text-lg">Now, all that's left to do is: <br />
            - make a function that calls for the right pizza object in our <code>Json</code> data <br />
            - the function will update the <code>useState</code> variable through its function <br />
            - call the specific object properties we want in our JSX <br />
            - have the function run when clicking the button <br /></p>
            <i className="text-white m-2 text-md">Once you have one function working, you can duplicate it, change its name and have it call for a different pizza. Don't forget about having another <code className="font-bold">event</code> (another button) to call it in your JSX.</i> <br /><br />

            <p className="text-white m-2 text-lg">We now have all the keys in our hands. Please don't mind giving it a try yourself before wtaching the solution, we're reaching the end !</p> <br />

            <p className="text-white m-2 text-lg">Let's take a look at a function that calls for a specific <b>pizza object</b>, through its <code className="font-bold">ID</code>:</p>
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`function setPepperoni() {
        setPizza(prevState => ({
            ...prevState,
            key: pizzaData[0].id,
            pizza: pizzaData[0].pizza,
            description: pizzaData[0].description,
            price: pizzaData[0].price
        }))
    }`} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg">This function first calls the <code className="font-bold">setter</code> (useState function) to update the state value. <br /> <br />

            Then it uses the <code className="font-bold">spread operator</code> (" ... ") to "copy" the last <b><code>state variable</code> value</b>, it being an object. <br />
            Since the <code className="font-bold">state variable</code>'s value already has an interface (we know what object properties we're waiting for), it calls the data from our <code>Json</code> in each property and updates its new value. <br />
            This way, if we'd ever accidentally forget to update some properties, it would still have the previous property value to show instead of an error.</p> <br />

            <p className="text-white m-2 text-lg">Let's also take a look at our modified JSX (buttons & data placeholders):</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`<div className='w-full flex flex-col items-center justify-center gap-10 sm:flex-row'>
    <ul className="flex flex-col w-46 gap-5">
        <button onClick={setPepperoni}><li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center'>Pizza pepperoni</li></button>
        <button onClick={setTripleCheese}><li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center' >Pizza triple cheese</li></button>
        <button onClick={setSalmonNCream}><li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center'>Pizza salmon & cream</li></button>
    </ul>

    <div className='flex flex-col text-center max-w-96'>
            <h1 className='font-bold text-xl text-white'>{pizza.pizza}</h1>
            <div className='flex flex-col items-center justify-center border-5 rounded-lg p-5 m-2 border-white'>
                            
                <p className='text-white'>{pizza.description}</p>
                <hr className='w-46 border-white m-2' />
                <p className='text-white italic font-bold'>{pizza.price}€</p>
            </div>
    </div>
</div>`} <br />
                </code>
            </div>

            <p className="text-white m-2 text-lg">If you take a look at our buttons, they do have the function set as their <code className="font-bold"> onClick</code> event. <br />
            After coding one working function, please remember we said we'd duplicate it, change the duped function's name and change the pizza that's called. <br />
            That's why there's <code className="font-bold">setTripleCheese</code> and <code className="font-bold">setSalmonNCream</code> in the example, they call for the triple cheese pizza object and the salmon and cream object. <br /><br />
            As a reminder since the data is mock, don't mind changing the <code>Json</code> data the way you want if you want to have actual pizza-like data.</p> <br />

            <p className="text-white m-2 text-lg">Finally, we can see our JSX data placeholders call for the <b><code>useState</code> variable properties</b>, so we can keep on having our JSX "layout" ready. <br />
            For instance, the <code className="font-bold">{"<"}h1{">"}</code> tag will always keep its classes and CSS properties, while the actual text content might change.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {`<h1 className='font-bold text-xl text-white'>{pizza.pizza}</h1>`} <br />
                </code>
            </div> <br />

            <p className="text-white m-2 text-lg">Annnnd... There we are, the end, again! Congrats if you made it this far. <br />
            You can find the whole code, and <b>its preview</b> below !</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                {rawStateMenu} {/* found a "smart way" of getting the raw code of the component instead of adding another 60 lines of code */}
                </code>
            </div> <br />

            <p className="text-white m-2 text-lg">Preview:</p>
            <br /><StateMenu />
        </>
    )
}