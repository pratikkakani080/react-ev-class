import React from 'react'

function Button(props) {
    console.log(props);

    const { buttonText, bgColor } = props
    
    return (
        <div>
            <button 
            style={{ backgroundColor: bgColor || 'blue', width: '100px' }}
            onClick={props.onClick}
            >{buttonText || 'Click me'}</button>
        </div>
    )
}

export default Button
