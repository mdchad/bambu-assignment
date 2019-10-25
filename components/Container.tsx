import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 block justify-between leading-normal">
            {children}
        </div>
        )
}

export default Container
