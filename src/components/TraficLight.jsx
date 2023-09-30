import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActualColor } from '../store/traficSlice'

function TraficLight() {

    const dispatch = useDispatch()
    const color = useSelector(state => state.traficLight.actualColor)
    const [freeMode, setFreeMode] = useState(false)

    useEffect(() => {
        let inrevalId
        if (freeMode) {
            inrevalId = setInterval(() => {
                const colors = ['red', 'yellow', 'green']
                const randomColor = colors[Math.floor(Math.random() * colors.length)]
                dispatch(setActualColor(randomColor))
            }, 2000)
        }
        return () => clearInterval(inrevalId)

    }, [freeMode, dispatch])

    const handleChangeFreeMode = () => {
        setFreeMode(!freeMode)
    }


    return (
        <div>
            <div className="traficLight">
                <div className={`color red ${color === 'red' ? 'actual' : ''}`}></div>
                <div className={`color yellow ${color === 'yellow' ? 'actual' : ''}`}></div>
                <div className={`color green ${color === 'green' ? 'actual' : ''}`}></div>
            </div>

            <h1>{color}</h1>
            <button onClick={() => dispatch(setActualColor('red'))}>Red</button>
            <button onClick={() => dispatch(setActualColor('yellow'))}>yellow</button>
            <button onClick={() => dispatch(setActualColor('green'))}>green</button>
            <button onClick={handleChangeFreeMode}>{freeMode ? 'Stop' : 'Start'}Free mode</button>
        </div>
    )
}

export default TraficLight