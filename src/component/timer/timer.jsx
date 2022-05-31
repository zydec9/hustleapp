import { useEffect, useState } from 'react'
import { timerInMinutesAndSeconds } from '../../utils/js-function'

import Button from '../button/button'

import './timer.scss'

const Timer = () => {

    const [timer, setTimer] = useState(localStorage.timer ? JSON.parse(localStorage.timer) : 0)

    const [isTimerOn, setIsTimerOn] = useState(false)

    useEffect(() => {
        localStorage.setItem('timer', JSON.stringify(timer))
    }, [timer])

    const timerplus5 = (event) => {
        event.preventDefault()
        setTimer(timer + 5 * 60)
    }

    const timerplus1 = (event) => {
        event.preventDefault()
        setTimer(timer + 60)
    }

    const timerless1 = (event) => {
        event.preventDefault()
        if (timer <= 60) {
            setIsTimerOn(false)
            return setTimer(0)
        }
        setTimer(timer - 60)
    }

    const timerless5 = (event) => {
        event.preventDefault()
        if (timer <= 300) {
            setIsTimerOn(false)
            return setTimer(0)
        }
        setTimer(timer - 5 * 60)
    }

    const toggleTimer = (event) => {
        event.preventDefault()
        setIsTimerOn(!isTimerOn)
    }

    const resetTimer = (event) => {
        event.preventDefault()
        setIsTimerOn(false)
        setTimer(0)

    }


    useEffect(() => {
        if (isTimerOn) {
            const interval = setInterval(() => {
                setTimer(timer => timer - 1)

            }, 1000)
            if (timer < 1) {
                setIsTimerOn(false)
            }

            return () => {
                clearInterval(interval)
            }
        }

    }, [isTimerOn, timer])

    useEffect(() => {
        if (timer === 0 && isTimerOn)
            alert('Time is Over')
    }, [isTimerOn, timer])



    return (

        <div className='timer-container container'>
            <div className="timer-inner">
                <h3>
                    Timer: {timerInMinutesAndSeconds(timer)}
                </h3>
                <div className="timer-buttons">
                <div className='timer-modify-buttons'>
                    <Button onClick={timerplus5}>+5 min</Button>
                    <Button onClick={timerplus1}>+1 min</Button>
                    <Button onClick={timerless1}>-1 min</Button>
                    <Button onClick={timerless5}>-5 min</Button>
                </div>
                <div className='timer-update-buttons'>
                    <Button onClick={toggleTimer}>Start/stop Timer</Button>
                    <Button onClick={resetTimer}>Reset Timer</Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Timer