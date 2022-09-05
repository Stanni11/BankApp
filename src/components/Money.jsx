import { useState } from 'react'

const Money = () => {
    const [userInput, userInputGet] = useState(0)
    const [result, resultGet] = useState(0)


    return (
        <div className='banana'>
            <h1 className="header">Banana Bank</h1>
            <div className="kontostand">Ihr Kontostand</div>
            <p>{result}</p>
            <input value={userInput} onChange={(e) => { userInputGet(e.target.value) }} type="number" placeholder='Bitte Betrag in € eingeben' />
            <button onClick={(e) => { resultGet((prev) => prev + Number(userInput)); userInputGet(0) }}>Einzahlen
            </button>
            <button onClick={(e) => { result - userInput >= 0 ? resultGet((prev) => prev - Number(userInput)) : window.prompt('Sie dürfen nicht ins Dispo'); userInputGet(0); }}>Auszahlen</button>
        </div>

    )
}

export default Money