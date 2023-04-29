import HomeScreen from "@/screens/home";
import ProductPage from "@/screens/productPage";
import { ReactElement } from "react"
type ProductType = {
    src ?: string;
    path : string;
    element ?: ReactElement
}

export const ROUTES = {
    product1 : "/p-111",
    product2 : "/p-112",
    product3 : "/p-113",
    product4 : "/p-114",
    product5 : "/p-115",
}


export const homeslideproduct:ProductType[] = [
    {
        src: "homeSlide1.png",
        path:ROUTES.product1,
        element : <ProductPage price={2000} src="homeSlide1.png"/>
    },
    {
        src: "homeSlide2.png",
        path:ROUTES.product2,
        element : <ProductPage price={2000} src="homeSlide2.png"/>
    },
    {
        src: "homeSlide3.png",
        path:ROUTES.product3,
        element : <ProductPage price={2000} src="homeSlide3.png"/>
    },
    {
        src: "homeSlide4.png",
        path:ROUTES.product4,
        element : <ProductPage price={2000} src="homeSlide4.png"/>
    },{
        src: "homeSlide5.png",
        path:ROUTES.product5,
        element : <ProductPage price={2000} src="homeSlide5.png"/>
    },
]