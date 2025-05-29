import pizzaDataGen from '../assets/pizza-data-gen.png'
import dataFolder from '../assets/data-folder.png'
import dataFields from '../assets/data-fields.png'

import PropsMenu from './props-example/PropsMenu'


type Props = {
    title: string;
    img: string;
}

export default function Props(props:Props) {

    return(
        <>
            <h3 className="text-white text-3xl m-5" id="props">{props.title}</h3>
            <img className="w-md mx-auto" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">Now, using Javascript doesn't mean you're gonna have all the data you want however you want off the bat. That's when <span className="italic font-bold">props</span> come in.</p> <br />

            <p className="text-white m-2 text-lg">In a webapp, you'd generally receive the data to the frontend as some "Json", after fetching / receiving it from the backend or somewhere else. If you're not too familiar with it, Json a data format that stores data, using the same structure as Javascript objects.</p> <br />

            <p className="text-white m-2 text-lg">Then what..? How do we do anything with real data to start with? <br />
            Let's get a Json file containing mock data first. <br />
            <span className='italic'>PS: We could also approach this by calling an API but it's simpler to do it like this if you're new to this.</span></p> <br />
            
            <p className="text-white m-2 text-lg">You can head to <a href="https://mockaroo.com/" target="_blank"><u><code className='font-bold'>mockaroo.com</code></u></a> and copy the following settings (image below), or you can simply download <a href="https://github.com/tomburger64/getting-back-into-react/blob/master/SUMUP/src/data/PIZZA_DATA.json" target='_blank' className='underline font-bold'>the data file from my GitHub repo</a>.</p>
            
            <a href="https://mockaroo.com/" target="_blank" id='MOCKUP-DATA-SETUP'>
                <img className='w-xl mx-auto' src={pizzaDataGen} alt="" />
            </a><br />

            <p className="text-white m-2 text-lg">Let's then add the file to our project, by making a <code className='font-bold'>data</code> folder inside the <code className='font-bold'>src</code> folder:</p> <br />
            <img className='w-wd mx-auto' src={dataFolder} alt="" /> <br />
            <p className="text-white m-2 text-lg">Move the mock json file you downloaded inside, and we're ready to get into props.</p> <br />

            <p className="text-white m-2 text-lg">Wherever you want to use data, you'll have to import your data. Now it shouldn't always happen in App.jsx, but in each component that needs it, to divide the data, wherever it's needed. it's less laggy to load this way! <br />
            The data should be imported to the parent component, and divided to his children according to what they need.</p><br />

            <p className="text-white m-2 text-lg">Here's an example: </p><br />

            <img className='w-md mx-auto' src="https://miro.medium.com/v2/resize:fit:1400/1*RlU99ty6Yp3SpqSbG8Noxg.png" alt="" /> <br />
            
            <p className="text-white m-2 text-lg">In this example, if each pizza to update its ingredients because of something added or modified, the Menu component would receive and pass on that info, to then give it to the concerned child component. This allows to not import ALL of the data to each child component. <br />
            This way, the pepperoni pizza has its ingredients along with its price and etc, while also not having the data of the triple cheese pizza. Why would it have it after all? <br />
            So the <code className='font-bold'>Menu</code> component from the image example, would give parts of the data to to each <code className='font-bold'>Pizza</code> component.</p> <br />

            <p className="text-white m-2 text-lg">Just like components divide JSX into parts, props are like dividing data into parts.</p> <br />
            <p className="text-white m-2 text-lg">Let's practice this while keeping the pizza theme. We'll use mock data from a file, import a few pizzas to be in a "featured pizzas" section so their information is displayed. As if we were making some pizzeria's home page!</p><br />

            <p className="text-white m-2 text-lg italic font-bold">Please do not pay attention to the CSS as the aim of this website is to focus on React concepts (looks don't matter). <br />
            Tailwind is used, but you don't even really have to do any CSS, it's about making stuff work.</p> <br />

            <p className="text-white m-2 text-lg">First let's make a simple <code className='font-bold'>Menu</code> component, which will receive some props. <br />
            Those props will contain the names of each pizza we want to set as one of the "featured pizzas", so if we ever want to change a pizza to another, we just have to write its name, and our code will get the right data to display.</p> <br />
            
            <p className='text-white m-2 text-lg'>Here's one of the most important things when it comes to dealing with data on anything related to the frontend: <b className='text-xl'>where the data will be used and how. If you know where and what will be used, you'll code at least twice as fast.</b> <br />
            Will it be static? Will it change when something is clicked? Etc...</p> <br />

            

            <p className='text-white m-2 text-lg'>If we take a look at our Json file, we can see every object has an <code className='font-bold'>"id"</code>, <code className='font-bold'>"pizza"</code>, <code className='font-bold'>"description"</code> and <code className='font-bold'>"price"</code> field, so we know what type of info we're getting: <span className='font-bold'>a number, two strings, and another number</span>.</p> <br />

            <img className='w-md mx-auto' src={dataFields} alt="" />
            <figcaption className='italic text-center text-sm text-white'>If you setup the data file like in <a href="#MOCKUP-DATA-SETUP" className='underline text-blue-200'>the example</a>, it should contain these fields</figcaption> <br />

            <p className='text-white m-2 text-lg'>Now, all we have to do is ready the data placeholders (JSX tags) for the data we're going to display. That means we don't care about IDs, but we do care about the pizza name, description and price! Let's make a few as we only want a few displayed.</p> <br />

            <p className="text-white m-2 text-lg italic font-bold">Menu component</p> <br />
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">

                    {"export default function PropsMenu(props: Props) {"} <br /><br />

    {"    return("} <br />
        {"        <>"} <br />
            {`            <h3 className="text-white m-2 text-2xl font-bold text-center">Our featured Pizzas of the week !</h3>`} <br />

            {'            <div className="flex mx-2 gap-5 overflow-x-auto justify-start sm:justify-center">'} <br /><br />

                {"                {/* featured pizza 1 */}"} <br />
                {'                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">'} <br />
                    {"                    <li className='text-lg font-bold text-center'>PIZZA NAME</li> <br />"} <br />
                    {"                    <li className='text-center'>PIZZA DESC</li>"} <br />
                    {"                    <hr className='w-36 mx-auto mt-auto' /> <br />"} <br />
                    {"                    <li className='text-center font-bold'>PIZZA PRICE</li>"} <br />
                {"                </ul>"} <br /><br />

                {"                {/* featured pizza 2 */}"} <br />
                {'                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">'} <br />
                    {"                    <li className='text-lg font-bold text-center'>PIZZA NAME</li> <br />"} <br />
                    {"                    <li className='text-center'>PZZA DESC</li> <br />"} <br />
                    {"                    <hr className='w-36 mx-auto mt-auto' /> <br />"} <br />
                    {"                    <li className='text-center font-bold'>PIZZA PRICE</li>"} <br />
                {"                </ul>"} <br /> <br />

                {"                {/* featured pizza 3 */}"} <br />
                {'                <ul className="bg-blue-200 p-5 rounded-lg w-60">'} <br />
                    {"                    <li className='text-lg font-bold text-center'>PIZZA NAME</li> <br />"} <br />
                    {"                    <li className='text-center'>PIZZA DESC</li> <br />"} <br />
                    {"                    <hr className='w-36 mx-auto mt-auto' /> <br />"} <br />
                    {"                    <li className='text-center font-bold'>PIZZA PRICE</li>"} <br />
                {"                </ul>"} <br />

            {"            </div>"} <br />
        {"        </>"} <br />
    {"    )"} <br />
{"}"}
                </code>
            </div>

            <p className='text-white m-2 text-lg'>Now that we're all set with the JSX, the only thing left is the data. To get it, let's choose a few pizzas' names from the Json file, which will be the ones displayed. <br />
            Now, the names are kind of random in the Json file and don't really match those of pizzas. If you mind, feel free to change a few. They don't have to be in order nor next to each other. Just don't write something too lengthy.</p> <br />

            <p className='text-white m-2 text-lg'>Let's start with importing our data into our component first! You can name almost everything that you import however you want in React, but remember to keep it clear, in camelCase (unless it's a component), and at the top of your code.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">

                    import pizzaData from '../../data/PIZZA_DATA.json'

                </code>
            </div>

            <p className='text-white m-2 text-lg'>Great ! Now, let's actually call in for the pizzas we want to have as "featured". To do that, inside your App.jsx, we'll need to skip a line and mark down the pizzas' names the following way:</p> <br />

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    {`    {/* ids of the featured pizzas of the week ↓ */}
    <PropsMenu
    featuredP1 = "Pepperoni"
    featuredP2 = "Triple Cheese"
    featuredP3 = "Salmon Cream" />`}
                </code>
            </div>
            <p className='text-white m-2 text-lg italic font-bold'>Please make sure the names you write are inside the Json data file or it WON'T WORK !</p>
            

            <p className='text-white m-2 text-lg'>Now that we have props for 3 "featuredP" (featured pizzas), please take a look at the syntax. It looks like an object, doesn't it? Except it requires '=' instead of ':' and doesn't need commas at the end of each line. <br />
            Note that you need to write " {"{ }"} " to specify non-string values (numbers, booleans, etc), just like you would in JSX to write Javascript. </p> <br />

            <p className='text-white m-2 text-lg'>Now, what can we do with the props we just wrote inside our <code className='font-bold'>Menu</code> component?</p> <br />
            
            <p className='text-white m-2 text-lg'>Let's first add a parameter inside our component. This is the "magic" thing that will allow to use the props we wrote, and guess what : it's good practice to call that parameter <code className='font-bold'>props</code> like so:</p> <br />

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    {"export default function PropsMenu(props) {"}
                </code>
            </div>

            <p className='text-white m-2 text-lg'>Now, let's do a bit of thinking and learning. <br />
            We need to link the <code className='font-bold'>featuredP</code> props to get the right objects from our <code className='font-bold'>Json</code> data. <br />
            Like we said earlier, the "magic" thing that will allow to link the props we wrote in our <code className='font-bold'>App.jsx</code> is the <code className='font-bold'>props</code> parameter we wrote in our <code className='font-bold'>Menu</code> component.</p> <br />

            <p className='text-white m-2 text-lg'>We can do a quick test, but I'll need to give you a hint first. <br />
            If you actually did some DOM practice with Javascript, you should know that to access <code className='font-bold'>arrays []</code> and <code className='font-bold'>objects {"{}"}</code>, you need to do something in particular.</p> <br />

            <p className='text-white m-2 text-lg'>To call for array elements, you do: </p>
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    console.log(array[0])
                </code>
            </div>
            <p className='text-white m-2 text-lg'>which returns the first element of the array.</p> <br />

            <p className='text-white m-2 text-lg'>As for objects, you have to do this:</p>
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    console.log(object.property)
                </code>
            </div>
            <p className='text-white m-2 text-lg'>Which returns a property of the object.</p> <br />

            <p className='text-white m-2 text-lg'>Now, we have both in our <code>Json</code> data (an array containing objects), so how would we do that? <br />
            This way:</p>
            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    console.log(array[0].poperty)
                </code>
            </div>
            <p className='text-white m-2 text-lg'>Basically, we ask for the first element of the array (aka the first object), and we then call the wanted property.</p>
            
            <br /><br /><br /><br /><br /><br /><p className='text-white m-2 text-lg'>let's see if our IDE's autocomplete shows us anything when we write <code className='font-bold'>props</code> inside curly brackets (" <code className='font-bold'>{"{ }"}</code> ").</p>
            
            {/* name of the featured pizzas have to correspond to those of the data */}
            <PropsMenu
            featuredName1 = "Pepperoni"
            featuredName2 = "Triple Cheese"
            featuredName3 = "Salmon Cream" />
            
        </>
    )
}

//             <div className='bg-gray-700 m-2'>
//                 <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">

//                     {"export default function PropsMenu(props: Props) {"} <br /><br />

//     {"    const featuredPizza1 = pizzaData[props.featuredId1]"} <br />
//     {"    const featuredPizza2 = pizzaData[props.featuredId2]"} <br />
//     {"    const featuredPizza3 = pizzaData[props.featuredId3]"} <br /><br />

//     {"    return("} <br />
//         {"        <>"} <br />
//             {`            <h3 className="text-white m-2 text-2xl font-bold text-center">Our featured Pizzas of the week !</h3>`} <br />

//             {'            <div className="flex mx-2 gap-5 overflow-x-auto justify-start sm:justify-center">'} <br /><br />

//                 {"                {/* featured pizza 1 */}"} <br />
//                 {'                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">'} <br />
//                     {"                    <li className='text-lg font-bold text-center'>{featuredPizza1.pizza}</li> <br />"} <br />
//                     {"                    <li className='text-center'>{featuredPizza1.description}</li>"} <br />
//                     {"                    <hr className='w-36 mx-auto mt-auto' /> <br />"} <br />
//                     {"                    <li className='text-center font-bold'>{featuredPizza1.price}€</li>"} <br />
//                 {"                </ul>"} <br /><br />

//                 {"                {/* featured pizza 2 */}"} <br />
//                 {'                <ul className="bg-blue-200 p-5 rounded-lg w-60 flex flex-col">'} <br />
//                     {"                    <li className='text-lg font-bold text-center'>{featuredPizza2.pizza}</li> <br />"} <br />
//                     {"                    <li className='text-center'>{featuredPizza2.description}</li> <br />"} <br />
//                     {"                    <hr className='w-36 mx-auto mt-auto' /> <br />"} <br />
//                     {"                    <li className='text-center font-bold'>{featuredPizza2.price}€</li>"} <br />
//                 {"                </ul>"} <br /> <br />

//                 {"                {/* featured pizza 3 */}"} <br />
//                 {'                <ul className="bg-blue-200 p-5 rounded-lg w-60">'} <br />
//                     {"                    <li className='text-lg font-bold text-center'>{featuredPizza3.pizza}</li> <br />"} <br />
//                     {"                    <li className='text-center'>{featuredPizza3.description}</li> <br />"} <br />
//                     {"                    <hr className='w-36 mx-auto mt-auto' /> <br />"} <br />
//                     {"                    <li className='text-center font-bold'>{featuredPizza3.price}€</li>"} <br />
//                 {"                </ul>"} <br />

//             {"            </div>"} <br />
//         {"        </>"} <br />
//     {"    )"} <br />
// {"}"}
//                 </code>
//             </div>