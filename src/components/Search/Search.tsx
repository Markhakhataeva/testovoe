import React, { FC } from 'react'

interface Action {
    searchTerm: string
    setSearchTerm: (a: string) => void
}
export const Search: FC<Action> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='search'>
            <input
                placeholder='Поиск товаров...'
                type='text'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
