import React, { FC } from 'react'

import { useProductStore } from '../../store/productStore'
import { Card } from './Card'

export const Cards: FC = () => {
    const { filteredProducts } = useProductStore()

    return (
        <div className='cards'>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <Card product={product} key={product.id} />
                ))
            ) : (
                <div className='error'>ПО ЗАПРОСУ НИЧЕГО НЕ НАЙДЕНО</div>
            )}
        </div>
    )
}
