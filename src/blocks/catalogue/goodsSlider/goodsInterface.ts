interface goodsInterface {
    id: string,
    price: number,
    weightGram: number,
    name: string,
    description: string,
    pictureUrl: string,
    charsObject: charInterface,
    propsObject: propsInterface
}

interface charInterface {
    mass?: string,
    expiration?: string,
    type?: string,
    fromAddress?: string
}

interface propsInterface {
    energy: string,
    carbs?: number,
    fats?: number,
    protein?: number,
}

export type {goodsInterface}