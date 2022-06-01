import { saveAs } from 'file-saver'

export const saveList = (file) => {
    const blob = new Blob([file], { type: "text/plain;charset=utf-8" })
    saveAs(blob, 'MyList')
}


export const saveNote = (note) => {
    const blob = new Blob([note], { type: "text/plain;charset=utf-8" })
    saveAs(blob, 'MyNote')
}

export const timerInMinutesAndSeconds = (timer) => {



    let min = `${Math.floor(timer / 60)}`
    let sec = `${(Math.floor(((timer / 60) - min) * 60) * 1000) / 1000}`

    if (min.length < 2) {
        min = "0" + min
    }

    if (sec.length < 2) {
        sec = "0" + sec
    }

    const clock = `${min}:${sec}`
    return clock

}


export const headerClicked = (componentOpen) => {
    const timerHeader = document.querySelector('.header-timer')
    const noteHeader = document.querySelector('.header-note')
    const listHeader = document.querySelector('.header-list')

    timerHeader.classList.remove('header-clicked', 'header-not-clicked')
    noteHeader.classList.remove('header-clicked', 'header-not-clicked')
    listHeader.classList.remove('header-clicked', 'header-not-clicked')


    if (componentOpen === 'Timer') {
        timerHeader.classList.add('header-clicked')
        noteHeader.classList.add('header-not-clicked')
        listHeader.classList.add('header-not-clicked')

    }
    else if (componentOpen === 'Note') {
        noteHeader.classList.add('header-clicked')
        timerHeader.classList.add('header-not-clicked')
        listHeader.classList.add('header-not-clicked')
    }
    else if (componentOpen === 'List') {
        listHeader.classList.add('header-clicked')
        noteHeader.classList.add('header-not-clicked')
        timerHeader.classList.add('header-not-clicked')
    }

}

const addPopup = () => {
    const popup = document.querySelector('.timer-popup-container')
    popup.classList.add('time-up')
}

export const endOfTimer = () => {

  
  
    const main = document.querySelector('.main-container')
    main.style.opacity = 0.2


    setTimeout(() => {
        main.style.opacity = 0.6
        document.body.style.backgroundColor = 'lightblue'
    }, 150)
    addPopup()
}


export const removePopup = () => {
    const popup = document.querySelector('.timer-popup-container')
    popup.classList.remove('time-up')
    const main = document.querySelector('.main-container')
    main.style.opacity = 1
    document.body.style.backgroundColor = 'white'
}

