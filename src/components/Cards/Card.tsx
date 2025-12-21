import React, { FC } from 'react'

import { useProductStore } from '../../store/productStore'
import { ProductProps } from '../../types/types'
import { Modal } from '../Modal/Modal'

export const Card: FC<ProductProps> = ({ product }) => {
    const { openModal } = useProductStore()

    const handleOpenClick = () => {
        openModal(product)
    }

    return (
        <>
            <div className='card' onClick={handleOpenClick}>
                <img src={product.image} alt='' />
                <div>
                    <h2>{product.title}</h2>
                    <h3>{product.price}$</h3>
                </div>
            </div>
            <Modal product={product} key={product.id} />
        </>
    )
}
