import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../header/header'
import Home from '../home/home'
import List from '../list/list'
import Note from '../note/note'
import Timer from '../timer/timer'
import TimerPopup from '../timer-popup/timer-popup'

import { headerClicked, endOfTimer } from '../../utils/js-function'

import './main.scss'

const Main = () => {

    const dispatch = useDispatch()
    const timer = useSelector(state => state.timerReducer.timer)
    const isTimerOn = useSelector(state => state.timerReducer.isTimerOn)

    const [componentOpen, setComponentOpen] = useState('Home')

    const clickList = () => {
        setComponentOpen('List')
    }
    const clickNote = () => {
        setComponentOpen('Note')
    }
    const clickTimer = () => {
        setComponentOpen('Timer')
    }

    useEffect(() => {

        headerClicked(componentOpen)
    }, [componentOpen])



    useEffect(() => {
        if (isTimerOn) {
            const interval = setInterval(() => {

                const newTimer = timer - 1
                dispatch({ type: 'SET_TIMER', payload: (newTimer) })

            }, 1000)
            if (timer < 1) {

                dispatch({ type: 'SET_IS_TIMER_ON', payload: false })
            }

            return () => {
                clearInterval(interval)
            }
        }

    }, [isTimerOn, timer])


    useEffect(() => {
       
        if (timer === 0 && isTimerOn){
            endOfTimer()
        }
    }, [isTimerOn, timer])
  


    return (

        <div className='main-container'>




            <Header clickList={clickList} clickNote={clickNote} clickTimer={clickTimer} />
          
            {componentOpen === 'Home' && <Home />}
            {componentOpen === 'List' && <List />}
            {componentOpen === 'Note' && <Note />}
            {componentOpen === 'Timer' && <Timer />}
           


        </div>
    )
}

export default Main