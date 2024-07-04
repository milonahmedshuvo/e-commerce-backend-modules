export type ProductInventory = {
        quantity: number;
        inStock: boolean;
}

export type VariantsObject = {
    type: string, 
    value: string 
}

export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: VariantsObject[];
    inventory: ProductInventory
}

