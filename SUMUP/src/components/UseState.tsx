import StateMenu from "./useState-example/StateMenu"

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
            Let's add some buttons to our JSX, <b>while using actual {"<button>"} tags</b> as we're going to use the click event later:</p>

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

            <StateMenu />
        </>
    )
}