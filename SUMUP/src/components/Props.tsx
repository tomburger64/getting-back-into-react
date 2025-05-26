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

            <p className="text-white m-2 text-lg">In a webapp, you'd generally receive the data to the frontend as some json, after fetching it. If you're not too familiar with this, it's basically a data format so that files can contain data, in a Javascript Object format ("Javascript Object Notaion" → Json)</p> <br />

            <p className="text-white m-2 text-lg">Then what..? How do we even use that data? <br />
            Let's practice getting some mock data ready first. <br />
            <span className='italic'>PS: We could also do this by calling some API but it's simpler to do it like this if you're new to this.</span></p> <br />
            
            <p className="text-white m-2 text-lg">You can head to <a href="https://mockaroo.com/" target="_blank"><u><code className='font-bold'>mockaroo.com</code></u></a> and copy the following settings (image below), or you can simply download <a href="https://github.com/tomburger64/getting-back-into-react/blob/master/SUMUP/src/data/PIZZA_DATA.json" target='_blank' className='underline font-bold'>the data file from my GitHub repo</a>.</p>
            
            <a href="https://mockaroo.com/" target="_blank" id='MOCKUP-DATA-SETUP'> {/*inline or link is clickable for whole width */}
                <img className='w-xl mx-auto' src={pizzaDataGen} alt="" />
            </a><br />

            <p className="text-white m-2 text-lg">Let's then add the file to our project, by making a <code className='font-bold'>data</code> folder inside the <code className='font-bold'>src</code> folder:</p> <br />
            <img className='w-wd mx-auto' src={dataFolder} alt="" /> <br />
            <p className="text-white m-2 text-lg">Move the mock json file you downloaded inside, and we're ready to get into props.</p> <br />

            <p className="text-white m-2 text-lg">Wherever you want to use data, you'll have to import your data. Now it shouldn't always happen in App.jsx, but in each component that needs it, to divide the data, wherever it's needed. it's less laggy to load this way! <br />
            The data should be imported to the parent component, and divided to his children according to what they need.</p><br />

            <p className="text-white m-2 text-lg">Here's an example: </p><br />

            <img className='w-md mx-auto' src="https://miro.medium.com/v2/resize:fit:1400/1*RlU99ty6Yp3SpqSbG8Noxg.png" alt="" /> <br />
            
            <p className="text-white m-2 text-lg">In this example, if each pizza had information about its ingredients and such, the Menu component would receive the data, and split it accordingly to his children. This allows to not import ALL of the data to each child component. <br />
            This way, the pepperoni pizza has its ingredients along with its price and etc, while also not having the data of the triple cheese pizza. Why would it have it after all? <br />
            So the <code className='font-bold'>Menu</code> component from the image example, would give parts of the data to to each <code className='font-bold'>Pizza</code> component.</p> <br />

            <p className="text-white m-2 text-lg">Just like components divide JSX into parts, props are like dividing data into parts.</p> <br />
            <p className="text-white m-2 text-lg">Let's practice this while keeping the pizza theme. We'll use mock data from a file, import a few pizzas to be in a "featured pizzas" section so their information is displayed. As if we were making some pizzeria's home page!</p><br />

            <p className="text-white m-2 text-lg">First let's make a simple <code className='font-bold'>Menu</code> component, which will receive some props. <br />
            Those props will contain the IDs of each "featured pizza" we choose, which will correspond to the pizza bojects with those IDs, and display their data accordingly (aka name, price, etc)</p> <br />

            <p className="text-white m-2 text-lg italic font-bold">Please note that CSS doesn't matter as the point is to deal with data through props (looks don't matter). This example, just like the other ones, uses Tailwind CSS, which is fine to not understand as it's not the aim of this guide.</p> <br />

            <p className='text-white m-2 text-lg'>Here's one of the most important things when it'll come to dealing with data with React: <b className='text-xl'>where the data will be used and how.</b> <br />
            Will it be static? Will it change when something is clicked? Etc...</p>

            <p className='text-white m-2 text-lg'>If we take a look at our Json file, we can see every object has an <code className='font-bold'>"id"</code>, <code className='font-bold'>"pizza"</code>, <code className='font-bold'>"description"</code> and <code className='font-bold'>"price"</code> field, so we know what type of info we're getting:</p> <br />

            <img className='w-md mx-auto' src={dataFields} alt="" />
            <figcaption className='italic text-center text-sm text-white'>If you setup the data file like in <a href="#MOCKUP-DATA-SETUP" className='underline text-blue-200'>the example</a>, it should contain these fields</figcaption> <br />

            <p className='text-white m-2 text-lg'>Now, all we have to do is ready the data placeholders (JSX tags) for the data we're going to display. That means we don't care about IDs, but we do care about the pizza name, description and price!</p> <br />

            <p className='text-white m-2 text-lg'>One last thing, considering how much data we got: we'll call only a few pizzas, as no one cares about a whole <b>1000</b> featured pizzas, right? So no worries on making a lot of placeholders, we'll only do a few.</p>
            <p className='text-white m-2 text-lg italic font-bold'>Note that you can actually make loops to render big amounts of components though !</p> <br />

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

            <p className='text-white m-2 text-lg'>Now that we're all set with the JSX, the only thing left is the data. To get it, let's choose a few pizzas' IDs from the Json file, which will be the ones displayed.</p> <br />

            <p className='text-white m-2 text-lg'>Let's start with importing our data into our component first ! You can name almost everything that you import however you want, but remember to keep it clear, in camelCase, and at the top of your code.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">

                    import pizzaData from '../../data/PIZZA_DATA.json'

                </code>
            </div>

            <p className='text-white m-2 text-lg'>Great ! Now, let's actually call in for the few IDs of the pizzas we want to have as "featured". To do that, inside the component of the menu (inside your App.jsx !), we'll need to skip a line and mark down the IDs the following way:</p> <br />

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    {`    {/* ids of the featured pizzas of the week ↓ */}
    <PropsMenu
    featuredId1 = {0}
    featuredId2 = {1}
    featuredId3 = {5} />`}
                </code>
            </div>

            <p className='text-white m-2 text-lg'>Writing what almost looks like parameters without parentheses like we just did is the syntax to write props. It looks like the syntax of an object, doesn't it? Except it requires '=' instead of ':' and doesn't need commas at the end of each line. <br />
            Also, notice how you need to write " {"{ }"} " to specify non-string values (numbers, booleans, etc), as that's the simplicity of React: it's just Javascript ! </p> <br />

            <p className='text-white m-2 text-lg'>Now, how do we deal with the props from inside our <code className='font-bold'>Menu</code> component?</p> <br />
            
            <p className='text-white m-2 text-lg'>Let's first add the "<code className='font-bold'>props</code>" parameter inside our component, like so:</p> <br />

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    {"export default function PropsMenu(props) {"}
                </code>
            </div>

            <p className='text-white m-2 text-lg'>Adding this will allow our component to read what we wrote as props earlier, kind of like the temporary variable you use when using the .map() function, so it can deal with whatever array it's dealing with.</p> <br />

            <p className='text-white m-2 text-lg'>Now, let's do a bit of thinking. We need to link the ID props we chose to our actual data. We can do this in native Javascript, right above our <code className='font-bold'>return</code> statement in our <code className='font-bold'>Menu</code> function.</p>
            

            {/* id of featured pizzas of the week ↓ */}
            <PropsMenu
            featuredId1 = {0}
            featuredId2 = {1}
            featuredId3 = {5} />
            
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