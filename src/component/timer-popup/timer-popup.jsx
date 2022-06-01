import Button from '../button/button'
import { removePopup } from '../../utils/js-function'

import './timer-popup.scss'


const TimerPopup = () => {

    const handleClick = (event) => {
        event.preventDefault()
        removePopup()

    }

    return (
        <div className='timer-popup-container'>

            <h2>Time is up </h2>
            <Button onClick={handleClick}>Continue</Button>
        </div>
    )
}


export default TimerPopup