import pizzaData from '../../data/PIZZA_DATA.json'

type Props = {
    featuredName1: string,
    featuredName2: string,
    featuredName3: string
}
type featuredP = {
    pizza: string,
    description: string,
    price: number
} 

// check for props id, get the info using the id in the json file, return the wanted title desc & price



export default function PropsMenu(props: Props) {

    // initially wanted to make an object for each pizza, mapping through the object which's id corresponds to the featuredid prop but doing this is simpler
    // const featuredPizza1 = pizzaData[props.featuredId1]
    // const featuredPizza2 = pizzaData[props.featuredId2]
    // const featuredPizza3 = pizzaData[props.featuredId3]

    // CHANGE OF PLANS, instead of searching by id, must enter the exact name of the pizza (trying to make the usage of props more meaningful to a beginner)
    // so .find() through the Json, returning the first pizza that has the exact name
    const featuredP1: featuredP | undefined = pizzaData.find(name => name.pizza === props.featuredName1)
    const featuredP2: featuredP | undefined = pizzaData.find(name => name.pizza === props.featuredName2)
    const featuredP3: featuredP | undefined = pizzaData.find(name => name.pizza === props.featuredName3)
    

    return(
        <>
            <h3 className="text-white m-2 text-2xl font-bold text-center">Our featured Pizzas of the week !</h3>

            {/* just adding 2 letters (sm:*class* / lg / 2xl / etc) is enough to make all the display view breakpoint stuff automatic??? I wanna marry tailwind */}
            <div className="flex mx-2 gap-5 overflow-x-auto justify-start sm:justify-center">

                {/* featured pizza 1 */}
                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">
                    {/* if featured pizza 1/2/3 has a name match, displays */}
                    {featuredP1 ? (
                        <>
                            <li className='text-lg font-bold text-center'>{featuredP1.pizza}</li> <br />
                            <li className='text-center'>{featuredP1.description}</li>
                            <hr className='w-36 mx-auto mt-auto' /> <br />
                            <li className='text-center font-bold'>{featuredP1.price}€</li>
                        </>
                        // otherwise, displays this ↓
                    ) : (<p className='text-red-500 text-center'>Error: sorry for the inconvenience! <br />
                    <span className='italic'>featuredP1 does not match</span></p>)
                    }
                </ul>

                {/* featured pizza 2 */}
                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">
                    {featuredP2 ? (
                        <>
                            <li className='text-lg font-bold text-center'>{featuredP2.pizza}</li> <br />
                            <li className='text-center'>{featuredP2.description}</li>
                            <hr className='w-36 mx-auto mt-auto' /> <br />
                            <li className='text-center font-bold'>{featuredP2.price}€</li>
                        </>
                    ) : (
                        <p className='text-red-500'>Error: sorry for the inconvenience! <br />
                    <span className='italic'>featuredP2 does not match</span></p>)
                    }
                    
                </ul>

                {/* featured pizza 3 */}
                <ul className="bg-blue-200 p-5 rounded-lg w-60">
                    {featuredP3 ? (
                        <>
                            <li className='text-lg font-bold text-center'>{featuredP3.pizza}</li> <br />
                            <li className='text-center'>{featuredP3.description}</li> <br />
                            <hr className='w-36 mx-auto mt-auto' /> <br />
                            <li className='text-center font-bold'>{featuredP3.price}€</li>
                        </>
                    ) : (
                        <p className='text-red-500'>Error: sorry for the inconvenience! <br />
                    <span className='italic'>featuredP3 does not match</span></p>)}
                    
                </ul>

            </div>
        </>
    )
}