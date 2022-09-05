import { useState } from 'react'

const Money = () => {
    const [stand, standAdd] = useState(0)
    const [stand1, standAdd1] = useState(0)
    /* const dispo = () => {
        if (stand >= 0) {
            window.prompt('Sie dürfen nicht ins Dispo')
        }
        else {

        }
}*/


    return (
        <div className='banana'>
            <h1 className="header">Banana Bank</h1>
            <div className="kontostand">Ihr Kontostand</div>
            <p>{stand1}</p>
            <input value={stand} onChange={(e) => { standAdd(e.target.value) }} type="number" placeholder='Bitte Betrag in € eingeben' />
            <button onClick={(e) => { standAdd1((prev) => prev + Number(stand)); standAdd(0) }}>Einzahlen
            </button>
            <button onClick={(e) => { stand1 - stand >= 0 ? standAdd1((prev) => prev - Number(stand)) : window.prompt('Sie dürfen nicht ins Dispo'); standAdd(0); }}>Auszahlen</button>
        </div>

    )
}

export default Money