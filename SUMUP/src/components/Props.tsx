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
            
            <p className="text-white m-2 text-lg">You can head to <a href="https://mockaroo.com/" target="_blank"><u><code className='font-bold'>mockaroo.com</code></u></a> and copy the following settings (image below), or you can simply download the data file from my GitHub repo directly at (<code className='font-bold'>src {"<"} data {"<"} <span className='italic'>PIZZA_DATA.json</span></code>).</p>
            
            <a href="https://mockaroo.com/" target="_blank" id='MOCKUP-DATA-SETUP'> {/*inline or link is clickable for whole width */}
                <img className='w-xl mx-auto' src={pizzaDataGen} alt="" />
            </a><br />

            <p className="text-white m-2 text-lg">Let's then add the file to our project, by making a <code className='font-bold'>data</code> folder inside the <code className='font-bold'>src</code> folder:</p> <br />
            <img className='w-wd mx-auto' src={dataFolder} alt="" /> <br />
            <p className="text-white m-2 text-lg">Move the mock json file you downloaded inside, and we're ready to get into props.</p> <br />

            <p className="text-white m-2 text-lg">Wherever you want to use data, you'll have to import your data. Now it shouldn't always happen in App.jsx, but in each component that needs it. But it turns out, you can just give it to a component and pass the data to each of its children components thanks to props. Don't panick if it sounds complicated, let me explain: <br />
            You have to import data somewhere to start with. If that component has children (small components inside bigger components), the parent component (the bigger one) can just divide that data and give just what's necessary to each of its children components. There's less bloat and more performance this way ! </p><br />

            <p className="text-white m-2 text-lg">Here's an example: </p><br />

            <img className='w-md mx-auto' src="https://miro.medium.com/v2/resize:fit:1400/1*RlU99ty6Yp3SpqSbG8Noxg.png" alt="" /> <br />
            
            <p className="text-white m-2 text-lg">In this example, if the Menu component wanted to share information about each pizza, like its price and ingredients, it wouldn't send all of the data to each children, right? <br />
            It would send just the right data to each pizza Component, so that the pepperoni pizza has the pepperoni and other ingredients along with its price and etc, while also not having the data of the triple cheese pizza. Why would it have it after all? <br />
            So the <code className='font-bold'>Menu</code> component from the image example, would give parts of the data to to each <code className='font-bold'>Pizza</code> component.</p> <br />

            <p className="text-white m-2 text-lg">Just like components divide JSX into parts, props are like dividing data into parts.</p> <br />
            <p className="text-white m-2 text-lg">Let's do this while keeping the pizza theme, so it's easier to follow along. First let's make a <code className='font-bold'>Menu</code> component while importing our Json file, and let's also make some <code className='font-bold'>Pizza</code> components. No need to make more, this is just a specific example trying to be as general as possible.</p> <br />

            <p className="text-white m-2 text-lg">Let's also add some basic JSX so that it actually looks like a menu to access each pizza. <br />
            <span className='italic'>Please note that CSS doesn't matter as the point is to deal with data through props (looks don't matter). This example, just like the other ones, uses Tailwind CSS, which is fine to not understand as it's not the aim of this guide.</span></p>

            <p className='text-white m-2 text-lg'>Here's one of the most important things when it'll come to dealing with data with React: <b className='text-xl'>where the data will be used and how.</b> <br />
            Will it be static? Will it change when something is clicked? Etc...</p>

            <p className='text-white m-2 text-lg'>To help resolve this problem and not waste hours upon hours, you have to pay close attention to what data you have shown. If we take a look at our Json file, we can see every object has an <code className='font-bold'>"id"</code>, <code className='font-bold'>"pizza"</code>, <code className='font-bold'>"description"</code> and <code className='font-bold'>"price"</code>, so we know what info we're getting:</p> <br />

            <img className='w-md mx-auto' src={dataFields} alt="" />
            <figcaption className='italic text-center text-sm text-white'>If you setup the data file like in <a href="#MOCKUP-DATA-SETUP" className='underline text-blue-200'>the example</a> it contains these fields</figcaption> <br />

            <p className='text-white m-2 text-lg'>Now, all we have to do is ready the data placeholders for the data we're going to show. That means we don't care about IDs, but we will ready placeholder for the pizza name, description and price !</p> <br />

            <p className='text-white m-2 text-lg'>One last thing, considering how much data we got: we'll use a few IDs to call only a few pizzas, as no one cares about a whole <b>1000</b> featured pizzas, right? So no worries on making a lot of placeholders, we'll only do a few.</p>
            <p className='text-white m-2 text-lg italic'>Note that you can actually make loops to render big amounts of components though !</p> <br />

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

            <p className='text-white m-2 text-lg'>Now that we're all set, the only thing left is the data. To get it, we'll select a few IDs from the Json file, and those are the pizzas that will be returned. Keep in mind the ID is always equal to the index <b>minus one</b> (to call the first pizza object that has the ID 1, its index is actually 0, as we substract 1).</p> <br />

            <p className='text-white m-2 text-lg'>Let's start with importing our data into our component first ! You can name almost everything that you import however you want, but remember to keep it clear, in camelCase, and at the top of your code.</p>

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">

                    import pizzaData from '../../data/PIZZA_DATA.json'

                </code>
            </div>

            <p className='text-white m-2 text-lg'>Great ! Now, let's actually call in for the few IDs of the pizzas we want to have as "featured". To do that, inside the component of the menu (inside your App.jsx !), we'll need to skip a line and mark down the IDs the following way:</p> <br />

            <div className='bg-gray-700 m-2'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">
                    {`    <PropsMenu
    featuredId1 = {0}
    featuredId2 = {1}
    featuredId3 = {5} />`}
                </code>
            </div>
            {/* id of featured pizzas of the week ↓ */}
            

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