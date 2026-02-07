import React, { FC, useEffect, useState } from 'react'

import { AddCardWindow } from './AddCardWindow/AddCardWindow'
import { Modal } from './Modal/Modal'
import { Nothing } from './Nothing'

export interface Product {
    id: number
    title: string
    price: number
    category: string
    image: string
    description: string
}

const Products: Product[] = [
    {
        id: 1,
        title: 'Смарт-часы X100',
        price: 7490,
        category: 'Гаджеты',
        image: 'https://st.aestatic.net/items-img-13/R/C/I/5/4124fa58838183fed367590e1bd655aa.jpg_960x960.jpg',
        description:
            'Водонепроницаемые, GPS, 7-дневный аккумулятор. Идеально подходят для спорта и повседневного использования.',
    },
    {
        id: 2,
        title: 'Беспроводные наушники Pro',
        price: 5490,
        category: 'Аудио',
        image: 'https://avatars.mds.yandex.net/get-mpic/1554397/2a0000019113412854768a8e7d27123c5d9d/orig',
        description:
            'Шумоподавление, 30 часов работы, стильный дизайн. Качество звука премиум-класса.',
    },
    {
        id: 3,
        title: 'Смартфон Galaxy S24',
        price: 89990,
        category: 'Смартфоны',
        image: 'https://avatars.mds.yandex.net/i?id=0d6ccd9f223118691026243578e347a50516eccd-10469104-images-thumbs&n=13',
        description:
            '6.7-дюймовый дисплей, камера 200 МП, процессор последнего поколения.',
    },
    {
        id: 4,
        title: 'Ноутбук UltraBook',
        price: 124990,
        category: 'Ноутбуки',
        image: 'https://avatars.mds.yandex.net/i?id=a4955670477dcdb3ae4a2cb01f12a13be6fb8c35-5243350-images-thumbs&n=13',
        description:
            '16 ГБ ОЗУ, SSD 1 ТБ, процессор Intel Core i7. Идеально для работы и развлечений.',
    },
    {
        id: 5,
        title: 'Фитнес-браслет Active',
        price: 2990,
        category: 'Гаджеты',
        image: 'https://avatars.mds.yandex.net/get-mpic/5191276/img_id257219460733092036.jpeg/orig',
        description:
            'Отслеживание сна, пульса, шагов. Водонепроницаемый, сенсорный экран.',
    },
    {
        id: 6,
        title: 'Планшет Tab Pro',
        price: 45990,
        category: 'Планшеты',
        image: 'https://avatars.mds.yandex.net/i?id=442e261dcb0bd01751150ebdb612d22daef8e59e-4012459-images-thumbs&n=13',
        description:
            '11-дюймовый экран, поддержка стилуса, 128 ГБ памяти. Отлично подходит для творчества.',
    },
    {
        id: 7,
        title: 'Смарт-часы X100',
        price: 7490,
        category: 'Гаджеты',
        image: 'https://st.aestatic.net/items-img-13/R/C/I/5/4124fa58838183fed367590e1bd655aa.jpg_960x960.jpg',
        description:
            'Водонепроницаемые, GPS, 7-дневный аккумулятор. Идеально подходят для спорта и повседневного использования.',
    },
    {
        id: 8,
        title: 'Беспроводные наушники Pro',
        price: 5490,
        category: 'Аудио',
        image: 'https://avatars.mds.yandex.net/get-mpic/1554397/2a0000019113412854768a8e7d27123c5d9d/orig',
        description:
            'Шумоподавление, 30 часов работы, стильный дизайн. Качество звука премиум-класса.',
    },
    {
        id: 9,
        title: 'Смартфон Galaxy S24',
        price: 89990,
        category: 'Смартфоны',
        image: 'https://avatars.mds.yandex.net/i?id=0d6ccd9f223118691026243578e347a50516eccd-10469104-images-thumbs&n=13',
        description:
            '6.7-дюймовый дисплей, камера 200 МП, процессор последнего поколения.',
    },
    {
        id: 10,
        title: 'Ноутбук UltraBook',
        price: 124990,
        category: 'Ноутбуки',
        image: 'https://avatars.mds.yandex.net/i?id=a4955670477dcdb3ae4a2cb01f12a13be6fb8c35-5243350-images-thumbs&n=13',
        description:
            '16 ГБ ОЗУ, SSD 1 ТБ, процессор Intel Core i7. Идеально для работы и развлечений.',
    },
]

export const App: FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [text, setText] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false)

    useEffect(() => {
        setProducts(Products)
        setFilteredProducts(Products)
    }, [])

    useEffect(() => {
        const filtered = products.filter((product: Product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFilteredProducts(filtered)
    }, [searchQuery, products])

    useEffect(() => {
        const handleEsc = (e: any) => {
            if (e.key === 'Escape') setSelectedProduct(null)
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [])

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()
        const newProduct = {
            id: products.length + 1,
            title: text,
            price: Math.random() / 100000,
            category: 'Гаджеты',
            image: 'https://st.aestatic.net/items-img-13/R/C/I/5/4124fa58838183fed367590e1bd655aa.jpg_960x960.jpg',
            description: desc,
        }

        setProducts(prev => [...prev, newProduct])

        setText('')
        setDesc('')
        closeWindowModal()
    }
    console.log(products)

    const openWindowModal = () => {
        setIsWindowOpen(true)
    }

    const closeWindowModal = () => {
        setIsWindowOpen(false)
    }

    const openModal = (product: Product) => {
        setSelectedProduct(product)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedProduct(null)
        document.body.style.overflow = 'unset'
    }

    return (
        <div className='App'>
            <header>
                <div>
                    <span>
                        <h1>PRODUCT-CARDS</h1>
                    </span>
                    <div className='input'>
                        <input
                            placeholder='Поиск товаров...'
                            name='text'
                            type='text'
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button
                        className='openWindowModal'
                        onClick={openWindowModal}
                    >
                        OPEN
                    </button>
                </div>
                <span>
                    <hr className='line' />
                </span>
            </header>

            <main className='max-w-7xl mx-auto px-4 py-8'>
                <section>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <article className='card' key={product.id}>
                                <div className='card-image'>
                                    <img src={product.image} alt='' />
                                </div>
                                <div className='category'>
                                    {product.category}
                                </div>
                                <div className='block'>
                                    <div className='author'>
                                        <h2>{product.title}</h2>
                                        <span className='price'>
                                            <h3>{product.price}$</h3>
                                        </span>
                                    </div>
                                    <button onClick={() => openModal(product)}>
                                        more
                                    </button>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className='error'>
                            ПО ЗАПРОСУ НИЧЕГО НЕ НАЙДЕНО
                        </div>
                    )}
                </section>
            </main>
            <aside onClick={closeModal}>
                {selectedProduct && (
                    <Modal
                        closeModal={closeModal}
                        selectedProduct={selectedProduct}
                    />
                )}
            </aside>
            <aside>
                <AddCardWindow
                    isWindowOpen={isWindowOpen}
                    handleAdd={handleAdd}
                    setText={setText}
                    text={text}
                    desc={desc}
                    setDesc={setDesc}
                />
            </aside>

            <Nothing/>
        </div>
    )
}
