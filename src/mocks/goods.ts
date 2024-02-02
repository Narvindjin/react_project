import {goodsInterface} from "../blocks/frontpage/advantages/item/goodsInterface";

const goodsArray:goodsInterface[] = [
    {
        id: '1',
        price: 400,
        weightGram: 700,
        name: 'Филе бедра цыпленка',
        pictureUrl: 'urlhere',
        description: 'Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.',
        charsObject: {
            mass: 'Масса: 0,7 кг. (595-805 г.).',
            expiration: '6 суток',
            type: 'КОББ 500.',
            fromAddress: 'Тверская область',
        },
        propsObject: {
            energy: '135 ккал./565 кДж.',
            carbs: 0,
            fats: 8.7,
            protein: 13.8,
        },
    },
]