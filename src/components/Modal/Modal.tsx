import React, { FC, useEffect, useRef } from 'react'

import { useProductStore } from '../../store/productStore'
import { ProductProps } from '../../types/types'

export const Modal: FC<ProductProps> = ({ product }) => {
    const { selected, isModalOpen, closeModal } = useProductStore()
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOverlayClick = (e: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            ) {
                closeModal()
            }
        }

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }

        if (isModalOpen) {
            document.addEventListener('mousedown', handleOverlayClick)
            document.addEventListener('keydown', handleEsc)
        }

        return () => {
            document.removeEventListener('mousedown', handleOverlayClick)
            document.removeEventListener('keydown', handleEsc)
        }
    }, [isModalOpen, closeModal])

    if (!isModalOpen || !selected) return null

    return (
        <div>
            <div className='modal_active' ref={modalRef}>
                <div className='head'>
                    <div className='categories'>{selected.category}</div>
                    <button onClick={closeModal}>x</button>
                </div>

                <hr />
                <div className='modal_block'>
                    <img src={selected.image} alt='' />
                    <div>
                        <h1>{selected.title}</h1>
                        <h2>{selected.price}$</h2>
                        <div className='desc'>{selected.description}</div>
                        <button>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
