export default function UseEffectExample() {
    // have useEffect update something to be = to the input (uses useState)
    // (every update of input)

    // also do a clone without useState to fetch some data (common use of useEffect)
    return (
        <>
            <input type="text" placeholder="test" />
        </>
    )
}