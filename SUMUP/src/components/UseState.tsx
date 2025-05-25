import StateMenu from "./useState-example/StateMenu"

type Props = {
    title: string,
    img: string
}

export default function UseState(props: Props) {
    return(
        <>
            <h3 className="text-white text-3xl m-5" id="useState">{props.title}</h3>
            <img className="w-md" src={props.img} alt="" />

            <p className="text-white m-2 text-lg">useState is the first and most common "hook". As their name implies, hooks are gonna be ways of waiting for something to happen, to make something happen. Could be an event, like clicking a button, or might as well be the hover of an image.</p>

            <p>ignore this for now</p>
            <StateMenu />
        </>
    )
}