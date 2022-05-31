import { useState , useEffect} from 'react'
import { saveNote } from '../../utils/js-function'

import Button from '../button/button'


import './note.scss'

const Note = () => {
    const [note, setNote] =useState(localStorage.note || '')

    const handleChange = (event) => {
setNote(event.target.value)
    }

    const handleClickSave = (event) => {
        event.preventDefault()
        saveNote(note)
    }

    const handleClickDelete = (event) => {
        event.preventDefault()
        setNote('')
    }

    useEffect(() => {
localStorage.setItem('note', note)
    }, [note])

    return (
        <div className='note-container container'>
            <div className="note-inner">

<h3>Write a note:</h3>
<textarea name="" id="" cols="40" rows="10" onChange={handleChange} value={note}></textarea>

<div className="note-buttons">
    <Button onClick={handleClickSave}>Save Note</Button>
    <Button onClick={handleClickDelete}>Clear Note</Button>
</div>
            </div>

        </div>
    )
}

export default Note