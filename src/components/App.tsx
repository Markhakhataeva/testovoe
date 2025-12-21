import React from 'react'

import { useProductStore } from '../store/productStore'
import { Cards } from './Cards/Cards'
import { Header } from './Header/Header'
import { Search } from './Search/Search'

export const App = () => {
    const { setSearchTerm, searchTerm } = useProductStore()

    return (
        <div className='App'>
            <Header />
            <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <Cards />
        </div>
    )
}
