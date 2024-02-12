interface goodsInterface {
    id: number,
    price: number,
    weightGram: number,
    name: string,
    pictureUrl: string,
    tabs: {
        mainObject: mainInterface,
        charsObject: charInterface,
        propsObject: propsInterface,
    }
}

interface mainInterface {
    description: string,
    price: number,
    weightGram: number,
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

export type {goodsInterface, charInterface, propsInterface, mainInterface}