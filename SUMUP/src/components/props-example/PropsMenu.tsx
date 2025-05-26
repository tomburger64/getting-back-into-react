import pizzaData from '../../data/PIZZA_DATA.json'

type Props = {
    featuredId1:number,
    featuredId2:number,
    featuredId3:number
}

// check for props id, get the info using the id in the json file, return the wanted title desc & price



export default function PropsMenu(props: Props) {

    // initially wanted to make an object for each pizza, mapping through the object which's id corresponds to the featuredid prop but doing this is simpler
    const featuredPizza1 = pizzaData[props.featuredId1]
    const featuredPizza2 = pizzaData[props.featuredId2]
    const featuredPizza3 = pizzaData[props.featuredId3]

    return(
        <>
            <h3 className="text-white m-2 text-2xl font-bold text-center">Our featured Pizzas of the week !</h3>

            {/* just adding 2 letters (sm:*class* / lg / 2xl / etc) is enough to make all the display view breakpoint stuff automatic??? I wanna marry tailwind */}
            <div className="flex mx-2 gap-5 overflow-x-auto justify-start sm:justify-center">

                {/* featured pizza 1 */}
                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">
                    <li className='text-lg font-bold text-center'>{featuredPizza1.pizza}</li> <br />
                    <li className='text-center'>{featuredPizza1.description}</li>
                    <hr className='w-36 mx-auto mt-auto' /> <br />
                    <li className='text-center font-bold'>{featuredPizza1.price}€</li>
                </ul>

                {/* featured pizza 2 */}
                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">
                    <li className='text-lg font-bold text-center'>{featuredPizza2.pizza}</li> <br />
                    <li className='text-center'>{featuredPizza2.description}</li> <br />
                    <hr className='w-36 mx-auto mt-auto' /> <br />
                    <li className='text-center font-bold'>{featuredPizza2.price}€</li>
                </ul>

                {/* featured pizza 3 */}
                <ul className="bg-blue-200 p-5 rounded-lg w-60">
                    <li className='text-lg font-bold text-center'>{featuredPizza3.pizza}</li> <br />
                    <li className='text-center'>{featuredPizza3.description}</li> <br />
                    <hr className='w-36 mx-auto mt-auto' /> <br />
                    <li className='text-center font-bold'>{featuredPizza3.price}€</li>
                </ul>

            </div>
        </>
    )
}