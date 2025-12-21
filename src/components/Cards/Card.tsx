import React, { FC } from 'react'

import { ProductProps } from '../../types/types'

export const Card: FC<ProductProps> = ({ product }) => {
    return (
        <>
            <div className='card'>
                <img src={product.image} alt='' />
                <div>
                    <h2>{product.title}</h2>
                    <h3>{product.price}$</h3>
                </div>
            </div>
        </>
    )
}
