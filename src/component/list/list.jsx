import { useState, useEffect } from 'react'
import ListItems from '../list-items/list-items'
import Button from '../button/button'
import { saveList } from '../../utils/js-function'





import './list.scss'

const List = () => {

    const [input, setInput] = useState('')
    const [list, setList] = useState(localStorage.list ? JSON.parse(localStorage.list): [])


    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleAddToList = (event) => {
        event.preventDefault()
        setList([...list, input])
        setInput('')
    }

    const deleteItem = (event) => {

        const index = event.target.className
        const itemToDelete = [...list].slice(index, index + 1)
        const newList = [...list].filter(item => item !== itemToDelete[0])
        setList(newList)

    }

    const handleClickSave = (event) => {
        event.preventDefault()
        saveList(list)
    }

    const handleClickDelete = (event) => {
        event.preventDefault()
        setList([])
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))

    }, [list])


    return (
        <div className="list-container container">
            <div className="list-inner">
                <form action="" className='list-form'>
                   
                        <h3><label htmlFor="addList">Create a List: </label></h3>
                        <div className="list-form-input-button">
                            <input id='addList' type="text" value={input} onChange={handleChange} />
                                           
                                                
                                                <Button onClick={handleAddToList}>add to list</Button>
                        </div>
                </form>

                <ListItems list={list} deleteItem={deleteItem} />
                <div className="list-buttons">
                    <Button onClick={handleClickSave}>save list</Button>
                    <Button onClick={handleClickDelete}>clear list</Button>
                </div>


            </div>
        </div>

    )
}

export default List