import React from 'react'

interface ButtonProps {
    onClick?: () => {}
    children?: any
    customStyle?: any
}

const Button: React.FC<ButtonProps> = ({ onClick, children, customStyle }) => {
    const getStyles = Object.values(customStyle).join(' ')
    const mergeStyles = `${getStyles} mx-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded`

    return (
        <button className={mergeStyles} type="submit" onClick={onClick}>{children}</button>
    )
}

export default Button
