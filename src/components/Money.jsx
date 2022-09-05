import { useState } from 'react'

const Money = () => {
    const [stand, standAdd] = useState(0)
    const [stand1, standAdd1] = useState(0)
    /* const reset = () => {
        return input = ''
    } */

    return (
        <>
            <p>{stand1}</p>
            <input value={stand} onChange={(e) => { standAdd(e.target.value) }} type="number" />
            <button onClick={(e) => { standAdd1((prev) => prev + Number(stand)); standAdd(0) }}>Einzahlen
            </button>
            <button onClick={(e) => { standAdd1((prev) => prev - Number(stand)); standAdd(0) }}>Auszahlen</button>

        </>
    )
}

export default Money