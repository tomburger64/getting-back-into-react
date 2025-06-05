import { useState } from 'react'
import pizzaData from '../../data/PIZZA_DATA.json'

export default function StateMenu() {

    const [pizza, setPizza] = useState({
        key: -1,
        pizza: "Pizza",
        description: "← Click the buttons",
        price: 0
    })

    function setPepperoni() {
        setPizza(prevState => ({
            ...prevState,
            key: pizzaData[0].id,
            pizza: pizzaData[0].pizza,
            description: pizzaData[0].description,
            price: pizzaData[0].price
        }))
    }
    function setTripleCheese() {
        setPizza(prevState => ({
            ...prevState,
            key: pizzaData[1].id,
            pizza: pizzaData[1].pizza,
            description: pizzaData[1].description,
            price: pizzaData[1].price
        }))
    }
    function setSalmonNCream() {
        setPizza(prevState => ({
            ...prevState,
            key: pizzaData[5].id,
            pizza: pizzaData[5].pizza,
            description: pizzaData[5].description,
            price: pizzaData[5].price
        }))
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10 sm:flex-row'>
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
        </div>
    )
}