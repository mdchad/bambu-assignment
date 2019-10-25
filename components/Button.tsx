import React from 'react'

interface ButtonProps {
    onClick?: () => {}
    children?: any
    customStyle?: any
    testId?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, children, customStyle, testId }) => {
    const getStyles = Object.values(customStyle).join(' ')
    const mergeStyles = `${getStyles} mx-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded`

    return (
        <button className={mergeStyles} type="submit" data-testid={testId} onClick={onClick}>{children}</button>
    )
}

export default Button
