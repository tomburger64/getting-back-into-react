import pizzaDataGen from '../assets/pizza-data-gen.png'
import dataFolder from '../assets/data-folder.png'

import PropsMenu from './props-example/PropsMenu'

type Props = {
    title: string;
    img: string;
}

export default function Props(props:Props) {

    return(
        <>
            <h3 className="text-white text-3xl m-5" id="props">{props.title}</h3>
            <img className="w-md" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">Now, using Javascript doesn't mean you're gonna have all the data you want however you want off the bat. That's when <span className="italic font-bold">props</span> come in.</p> <br />

            <p className="text-white m-2 text-lg">In a webapp, you'd generally receive the data to the frontend as some json, after fetching it. If you're not too familiar with this, it's basically a data format so that files can contain data, in a Javascript Object format ("Javascript Object Notaion" → Json)</p> <br />

            <p className="text-white m-2 text-lg">Then what..? How do we even use that data? <br />
            Let's practice getting some mock data ready first. <br />
            <span className='italic'>PS: We could also do this by calling some API but it's simpler to do it like this if you're new to this.</span></p> <br />
            
            <p className="text-white m-2 text-lg">You can head to <a href="https://mockaroo.com/" target="_blank"><u><code className='font-bold'>mockaroo.com</code></u></a> and copy the following settings (image below), or you can simply download the data file from my GitHub repo directly at (<code className='font-bold'>src {"<"} data {"<"} <span className='italic'>PIZZA_DATA.json</span></code>).</p>
            
            <a href="https://mockaroo.com/" target="_blank" className='inline-block'> {/*inline or link is clickable for whole width */}
                <img className='w-md' src={pizzaDataGen} alt="" />
            </a><br />

            <p className="text-white m-2 text-lg">Let's then add the file to our project, by making a <code className='font-bold'>data</code> folder inside the <code className='font-bold'>src</code> folder:</p> <br />
            <img className='w-wd' src={dataFolder} alt="" /> <br />
            <p className="text-white m-2 text-lg">Move the mock json file you downloaded inside, and we're ready to get into props.</p> <br />

            <p className="text-white m-2 text-lg">Wherever you want to use data, you'll have to import your data. Now it shouldn't always happen in App.jsx, but in each component that needs it. But it turns out, you can just give it to a component and pass the data to each of its children components thanks to props. Don't panick if it sounds complicated, let me explain: <br />
            You have to import data somewhere to start with. If that component has children (small components inside bigger components), the parent component (the bigger one) can just divide that data and give just what's necessary to each of its children components. There's less bloat and more performance this way ! </p><br />

            <p className="text-white m-2 text-lg">Here's an example: </p><br />

            <img className='w-md' src="https://miro.medium.com/v2/resize:fit:1400/1*RlU99ty6Yp3SpqSbG8Noxg.png" alt="" /> <br />
            
            <p className="text-white m-2 text-lg">In this example, if the Menu component wanted to share information about each pizza, like its price and ingredients, it wouldn't send all of the data to each children, right? <br />
            It would send just the right data to each pizza Component, so that the pepperoni pizza has the pepperoni and other ingredients along with its price and etc, while also not having the data of the triple cheese pizza. Why would it have it after all? <br />
            So the <code className='font-bold'>Menu</code> component from the image example, would give parts of the data to to each <code className='font-bold'>Pizza</code> component.</p> <br />

            <p className="text-white m-2 text-lg">Just like components divide JSX into parts, props are like dividing data into parts too.</p> <br />
            <p className="text-white m-2 text-lg">Let's do this with the pizza theme, so it's easier to follow along. First let's make a <code className='font-bold'>Menu</code> component while importing our Json file, and let's also make some <code className='font-bold'>Pizza</code> components. No need to make a header / footer, but you can do it to experiment yourself if you want.</p> <br />

            <p className="text-white m-2 text-lg">Let's also add some basic JSX so that it actually looks like a menu to access each pizza.</p>

            <p className="text-white m-2 text-lg italic font-bold">Menu component</p> <br />
            <div className='bg-gray-700'>
                <code className="block text-white m-5 text-xl whitespace-pre overflow-x-auto break-keep">

                    do stuff here
                </code>
            </div>

            {/* id of featured pizzas of the week ↓ */}
            <PropsMenu
            featuredId1 = {0}
            featuredId2 = {1}
            featuredId3 = {5} />
            
        </>
    )
}