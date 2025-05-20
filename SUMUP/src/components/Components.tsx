// trying to learn how to use ts some more ↓
type Props = {
    title: string;
    img: string;
}

export default function Components(props: Props) {
    return (
        <>
            <h3 className="text-white text-3xl m-5">{props.title}</h3>
            <img className="w-md max-w-10vw" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">Starting with the basics: Components.</p> <br />

            <p className="text-white m-2 text-lg">Components are a simple way of grouping / dividing HTML into several parts using Javascript. <br />
            They allow your code to be seperated in different files, for instance, a file for a header, another for a section, etc.</p>

            <p className="text-white m-2 text-lg">If you didn't use components, with Javascript only you’d need to call each html tag in JS using something like:</p>
            <pre className="text-white m-2 text-lg whitespace-pre-wrap bg-gray-700 min-w-100">
                <code>
{`document.getElementById("header-container").innerHTML = \`
    <header>
        <h1>Welcome</h1>
        <button>Click me</button>
    </header>
\`;`}
                </code>
            </pre>

            <p className="text-white m-2 text-lg">You probably already did something like that if you learned some Javascipt before, and it's what React does with components !</p>
        </>
    )
}