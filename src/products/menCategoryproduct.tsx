import { ReactElement } from "react"

interface IMenProduct{
    src ?: string
    name ?:string
    price ?:number
    path  ?:string
    element ?:ReactElement
}

export const ROUTES ={
    menProduct1 : "/p-121",
    menProduct2 : "/p-122",
    menProduct3 : "/p-123",
}

export const menCategoryProducts:IMenProduct[] = [
    {
        src:"MenProduct1.png" ,
        name:"Mirage Sport Pronounce",
        price:2400,
        path :ROUTES.menProduct1,
        element: <h1>P1</h1>,
    },
    {
        src:"MenProduct2.png" ,
        name:"Mirage Sport Pronounce",
        price:2200,
        path :ROUTES.menProduct1,
        element: <h1>P1</h1>,
    },
    {
        src:"MenProduct3.png" ,
        name:"Mirage Sport Pronounce",
        price:2700,
        path :ROUTES.menProduct1,
        element: <h1>P1</h1>,
    },
]