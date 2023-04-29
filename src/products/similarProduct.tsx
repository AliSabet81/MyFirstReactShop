import ProductPage from "@/screens/productPage"
import { ReactElement } from "react"

interface ISimilarProduct{
    src : string
    name :string
    price :number
    path :string
    element ?:ReactElement
}

export const ROUTES ={
    menProduct1 : "/p-121",
    menProduct2 : "/p-122",
    menProduct3 : "/p-123",
}

export const similarProduct:ISimilarProduct[] = [
    {
        src:"MenProduct1.png" ,
        name:"Mirage Sport Pronounce",
        price:2400,
        path :ROUTES.menProduct1,
        element: <ProductPage price={2400} src="MenProduct1.png"/>
    },
    {
        src:"MenProduct2.png" ,
        name:"Mirage Sport Pronounce",
        price:2200,
        path :ROUTES.menProduct2,
        element: <ProductPage price={2200} src="MenProduct1.png"/>
    },
    {
        src:"MenProduct3.png" ,
        name:"Mirage Sport Pronounce",
        price:2700,
        path :ROUTES.menProduct3,
        element: <ProductPage price={2700} src="MenProduct1.png"/>
    },
]