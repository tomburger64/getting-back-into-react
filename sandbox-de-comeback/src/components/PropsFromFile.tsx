type Props = {
    text:string;
    author:string;
};

export default function PropsFromFile(props: Props) {
    return (
        <>
            <span>
                <h3>{props.author} says:</h3>
                <h1>{props.text}</h1>
            </span>
            <br />
        </>
    )
}