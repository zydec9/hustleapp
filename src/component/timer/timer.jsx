import { useEffect } from 'react'
import { timerInMinutesAndSeconds, } from '../../utils/js-function'

import Button from '../button/button'

import { useDispatch, useSelector } from 'react-redux'

import './timer.scss'



const Timer = () => {

    const dispatch = useDispatch()



    const timer = useSelector(state => state.timerReducer.timer)
    const isTimerOn = useSelector(state => state.timerReducer.isTimerOn)



    useEffect(() => {
        localStorage.setItem('timer', JSON.stringify(timer))
    }, [timer])

    const timerplus5 = (event) => {
        event.preventDefault()

        dispatch({ type: 'SET_TIMER', payload: (timer + 5 * 60) })
    }

    const timerplus1 = (event) => {
        event.preventDefault()

        // dispatch({ type: 'SET_TIMER', payload: (timer + 60) })
        dispatch({ type: 'SET_TIMER', payload: (timer + 1) })

    }

    const timerless1 = (event) => {
        event.preventDefault()
        if (timer <= 60) {

            dispatch({ type: 'SET_IS_TIMER_ON', payload: false })

            return dispatch({ type: 'SET_TIMER', payload: (0) })
        }

        dispatch({ type: 'SET_TIMER', payload: (timer - 60) })
    }

    const timerless5 = (event) => {
        event.preventDefault()
        if (timer <= 300) {

            dispatch({ type: 'SET_IS_TIMER_ON', payload: false })

            return dispatch({ type: 'SET_TIMER', payload: (0) })
        }

        return dispatch({ type: 'SET_TIMER', payload: (timer - 5 * 60) })
    }

    const toggleTimer = (event) => {
        event.preventDefault()

        if(timer){
        dispatch({ type: 'SET_IS_TIMER_ON', payload: !isTimerOn })
    }
    
    }

    const resetTimer = (event) => {
        event.preventDefault()

        dispatch({ type: 'SET_IS_TIMER_ON', payload: false })

        dispatch({ type: 'SET_TIMER', payload: (0) })

    }


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
                        <Button onClick={toggleTimer}>Start / Stop</Button>
                        <Button onClick={resetTimer}>Reset</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer