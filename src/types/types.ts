export interface Product {
    id: number
    title: string
    price: number
    category: string
    image: string
    description: string
}

export interface ProductStore {
    products: Product[]
    setProducts: (products: Product[]) => void
    active: boolean
    setActive: (active: any) => void
    searchTerm: string
    setSearchTerm: (a: string) => void
    filteredProducts: Product[]
}
export interface ProductProps {
    product: {
        id: number
        title: string
        price: number
        category: string
        image: string
        description: string
    }
}
