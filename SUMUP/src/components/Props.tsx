import genMockJson from '../assets/generate-mock-json.png'
import dataFolder from '../assets/data-folder.png'

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
            Let's practice by setting up some data, and that's why we'll use mock data from a Json file. <br />
            <span className='italic'>PS: We could also do this from some API but it's simpler to do it like this if you're new to this.</span></p> <br />
            
            <p className="text-white m-2 text-lg">Let's head to <a href="https://mockaroo.com/" target="_blank"><u><code className='font-bold'>mockaroo.com</code></u></a>, change the format from CSV to Json and click on <code className='font-bold'>"generate data"</code>. </p>
            <img className='w-md' src={genMockJson} alt="" /> <br />

            <p className="text-white m-2 text-lg">Let's then add the file to our project, by making a <code className='font-bold'>data</code> folder inside the <code className='font-bold'>src</code> folder:</p> <br />
            <img className='w-wd' src={dataFolder} alt="" /> <br />
            <p className="text-white m-2 text-lg">Move the mock json file you downloaded inside, and we're ready to get into props.</p> <br />
        </>
    )
}