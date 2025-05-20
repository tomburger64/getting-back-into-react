// trying to learn how to use ts some more ↓
type Props = {
    title: string;
    img: string;
}

export default function Components(props: Props) {
    return (
        <>
            <h3 className="text-white text-3xl m-5">{props.title}</h3>
            <img className="w-md" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">Starting with the basics: Components.</p> <br />

            <p>Components are a simple way of grouping / dividing HTML into several parts using Javascript.</p> <br /><br />
            
            <p>They allow you to have your code seperated across different files, for instance, a file for a header, another for a section, etc.</p>
        </>
    )
}