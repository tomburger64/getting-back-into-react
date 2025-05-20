import sameNameEx from '../assets/same-name-example.png'
import compFolder from '../assets/comp-folder.png'

// trying to learn how to use ts some more ↓
type Props = {
    title: string;
    img: string;
}

export default function Components(props: Props) {
    return (
        <>
            <h3 className="text-white text-3xl m-5" id='components'>{props.title}</h3>
            <img className="w-md max-w-10vw mx-auto" src={props.img} alt="" />

            <p className="text-white m-2 text-xl">Starting with the basics: Components.</p> <br />

            <p className="text-white m-2 text-xl">Components are a simple way of grouping / dividing HTML into several parts using Javascript. <br />
            They allow your code to be seperated in different files, for instance, a file for a header, another for a section, etc.</p>

            <p className="text-white m-2 text-xl">If you didn't use components, with Javascript only you’d need to call each html tag in JS using something like:</p>
            <pre className="text-white m-5 text-xl whitespace-pre-wrap bg-gray-700 overflow-x-auto break-words">
                <code className="w-full">
{`document.getElementById("header-container").innerHTML = \`
    <header>
        <h1>Welcome</h1>
        <button>Click me</button>
    </header>
\`;`}
                </code>
            </pre>

            <p className="text-white m-2 text-xl">You probably already did something like that if you learned some Javascipt before, and it's what React does with components !</p>

            <p className="text-white m-2 text-xl">Skipping over how to make a basic React app, to make your first component, you'll wanna make a "components" folder, to sort things clear.</p>
            <img className="w-md max-w-10vw mx-auto" src={compFolder} alt="" />

            <p className="text-white m-2 text-xl">Inside, you'll create a new file, using PascalCase (1st letter of each word captialized), ending in "<code className="font-bold">.jsx</code> ", as the code here will be "JavaScript XML", which basically allows you to write Javascript as HTML (so you can also mix it with JavaScript). <br />
            The component / function have the same name, here set as "<code className="font-bold">Example</code>"</p>
            <p className="text-white m-2 text-xl">Inside that file, you'll need to make a function. <br />
            Make sure to keep the syntax in PascalCase for its name.</p>
            <img className="w-md max-w-10vw mx-auto" src={sameNameEx} alt="" />

            <p className="text-white m-2 text-xl">Then, you're gonna make it return empty angle brackets like so:</p>
            <pre className="text-white m-5 text-xl whitespace-pre-wrap bg-gray-700 overflow-x-auto break-words"><code className="w-full">
                function Example{"()"} {"{"} <br />
                    {"    <>"} <br />
                    {"    </>"} <br />
                {"}"}
            </code></pre>
            <br />
            <p className="text-white m-2 text-xl">Good job so far, then you'll simply have to add some HTML.
                The one rule is there must always be a single parent tag, adding more will result in an error !
                So the "<code className="font-bold">{"<> </>"}</code>" is like a div parent, except if you want to add classes to it you're gonna replace it by an actual div / other tag.
            </p> <br />
            <p className="text-white m-2 text-xl">Let's take a final look before importing that code into the page:</p>
            <pre className="text-white m-5 text-xl whitespace-pre-wrap bg-gray-700 overflow-x-auto break-words"><code className="w-full">
                export default function Example{"()"} {"{"} <br />
                    {"    <>"} <br />
                    {"        "}{"<h1>Hello World!</h1>"} <br />
                    {"    </>"} <br />
                {"}"}
            </code></pre>
            <p className="text-white m-2 text-xl">Notice how you also need to export the function in order for it to be sent elsewhere, hence the "export default".</p>
            <p className="text-white m-2 text-xl">Also, to be fair, since their's only 1 tag here, there's no need to have the extra "<code className="font-bold">{"<></>"}</code>" parent tag.</p> <br />

            <p className="text-white m-2 text-xl">Final step, inside the App.jsx component, you'll be able to import the components you've exported, and call them in the JSX as if they were HTML tags, like so:</p>
            <pre className="text-white m-5 text-xl whitespace-pre-wrap bg-gray-700 overflow-x-auto break-words"><code className="w-full">
                import Example from './components/Example' <br /><br />

export default function App{"()"} {"{"} <br />
  {"    "}return {"("} <br />
  {"        "}{"<>"} <br />
  {"            "}{"<Example />"} <br />
  {"        "}{"</>"} <br />
  {"    "}{")"} <br />
  {"}"}
            </code></pre>

            <p className="text-white m-2 text-xl">Notice how the component tags close by themselves ("<code className="font-bold">{"<Example />"}</code>"), mind doing this on every component tag !</p>
            <p className="text-white m-2 text-xl">Aaaaand you just made your first React Component, congrats !</p> <br />
        </>
    )
}