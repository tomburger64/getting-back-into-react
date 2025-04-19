import { useState } from "react";

// "type" definition: makes an interface, forces certain
type Props = {
    imgUrl1: string;
    imgUrl2: string;
};

export default function TestComp(props: Props) { // parent takes in arg props, following the typescript structure of the Props definition

    const [count, setCount] = useState(4)
    function decrementCount() {
        setCount((prevCount => prevCount - 1))
    }
    function incrementCount() {
        setCount((prevCount => prevCount + 1))
    }

    return(
        <>
            <h1>Les oreos c'est pas mal mais c'est pas si ouf en fait</h1>
            <br />
            <p>azy image de chevallent</p>
            <img src={props.imgUrl1} alt="" />
            <img src={props.imgUrl2} alt="" />

            <hr /> {/* ↓ state stuff ↓ */}

            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}