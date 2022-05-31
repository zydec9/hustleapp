

import './header.scss'

const Header = ({clickList, clickNote, clickTimer}) => {


const handleClickList = (event) => {
    event.preventDefault()
    clickList()
}

const handleClickNote = (event) => {
    event.preventDefault()
    clickNote()
}

const handleClickTimer = (event) => {
    
    event.preventDefault()
    clickTimer()
}

return (

        <div className='header-container container'>
            <div className="header-inner">
           <div className="header-list" onClick={handleClickList}>MyList</div>
           <div className="header-note"onClick={handleClickNote}>MyNote</div>
           <div className="header-timer"onClick={handleClickTimer}>MyTimer</div>
            </div>

        </div>
    )
}

export default Header