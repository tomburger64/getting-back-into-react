type Props={
    title: string;
    img: string;
}

export default function UseState(props:Props) {
    return(
        <>
            <h3 className="text-white text-3xl m-5" id="useEffect">{props.title}</h3>
            <img className="w-md mx-auto" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">useEffect is used for "side effects" to happen once a component has loaded. On the first load only, or on every load, it can execute code.</p>
        </>
    )
}