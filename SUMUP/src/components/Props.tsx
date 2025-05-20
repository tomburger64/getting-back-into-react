type Props = {
    title: string;
    img: string;
}

export default function Props(props:Props) {
    return(
        <>
            <h3 className="text-white text-3xl m-5">{props.title}</h3>
            <img className="w-md" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">React States sallow to have dynamic data passed on from a parent to its child component, even if there are several children components that need to be gone through</p>
        </>
    )
}