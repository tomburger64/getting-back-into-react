import mockData from '../../data/mock-data.json'

export default function Menu() {
    return (
        <>
            <p></p>
            <ul className="flex flex-col w-46 gap-5">
                <a href="#"><li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center'>Pizza pepperoni</li></a>
                <a href="#"><li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center' >Pizza triple cheese</li></a>
                <a href="#"><li className='w-full bg-blue-300 hover:bg-blue-200 p-3 rounded-lg text-center'>Pizza salmon & cream</li></a>
            </ul>
        </>
    )
}