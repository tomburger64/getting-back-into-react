export default function NavMenu() {
    return (
        <>
            <p className="text-white flex justify-center font-bold text-xl my-5">Quick menu:</p>
            <ul className="flex flex-wrap gap-5 justify-center text-white w-full p-5">
                <li><a href="#components">
                    <div className="bg-gray-500 p-5">
                        components
                    </div>
                </a></li>
                <li><a href="#props">
                    <div className="bg-gray-500 p-5">
                        props
                    </div>
                </a></li>
                <li><a href="#useState">
                    <div className="bg-gray-500 p-5">
                        useState
                    </div>
                </a></li>
                <li><a href="#useEffect">
                    <div className="bg-gray-500 p-5">
                        useEffect
                    </div>
                </a></li>
            </ul>
        </>
    )
}