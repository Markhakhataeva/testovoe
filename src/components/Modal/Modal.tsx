import React, { FC } from 'react'

import { Product } from '../App'

interface ModalProps {
    closeModal: () => void
    selectedProduct: Product
}
export const Modal: FC<ModalProps> = ({ closeModal, selectedProduct }) => {
    return (
        <div className='modal_active'>
            <div
                className='head'
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                <div className='category'>{selectedProduct.category}</div>
                <button onClick={closeModal}>x</button>
            </div>
            <hr />
            <div className='modal_block'>
                <img src={selectedProduct.image} alt='' />
                <div>
                    <h1>{selectedProduct.title}</h1>
                    <h2>{selectedProduct.price}$</h2>
                    <div className='desc'>{selectedProduct.description}</div>
                    <button>Купить</button>
                </div>
            </div>
        </div>
    )
}
