

import './button.scss'

const Button = ({children, onClick}) => {

    return (
        <button className='button-component' onClick={onClick}>
{children}
        </button>
    )
}

export default Button