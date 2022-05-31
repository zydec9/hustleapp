

import './list-items.scss'

const ListItems = ({list, deleteItem}) => {

    const handleClick = (event) => {
        event.preventDefault()
        deleteItem(event)
    } 
    
    return (
        <div className='list-items-container'>
            <div className="list-items-inner">
                <ul>
{
    list.map((item, index) =>{
        return <li key={index}> 
        {item}
        {/* <button className={index} onClick={handleClick}>X</button> */}
         <a className={index} onClick={handleClick}>&#10005;</a>
        </li>
    } )
}
</ul>
            </div>
        </div>
    )
}

export default ListItems