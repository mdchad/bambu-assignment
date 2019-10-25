import React from 'react'

interface HeaderProps {
    children?: any
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <h1 className="text-gray-900 text-left font-bold text-xl mb-2 w-full">{children}</h1>
    )
}

export default Header
