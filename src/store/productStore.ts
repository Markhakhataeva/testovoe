import { ProductStore } from '../types/types'
import { create } from 'zustand'

const Products = [
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
]

export const useProductStore = create<ProductStore>(() => ({
    products: Products,

}))
