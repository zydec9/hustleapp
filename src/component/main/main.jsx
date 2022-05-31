import { useState, useEffect } from 'react'

import Header from '../header/header'
import Home from '../home/home'
import List from '../list/list'
import Note from '../note/note'
import Timer from '../timer/timer'

import { headerClicked } from '../../utils/js-function'

import './main.scss'

const Main = () => {
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


    return (

        <div>

            <Header clickList={clickList} clickNote={clickNote} clickTimer={clickTimer} />
            {componentOpen === 'Home' && <Home />}
            {componentOpen === 'List' && <List />}
            {componentOpen === 'Note' && <Note />}
            {componentOpen === 'Timer' && <Timer />}


        </div>
    )
}

export default Main