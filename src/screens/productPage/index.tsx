import SwiperThumbs from "@/components/productSwiper";
import "./index.css"
import product1 from "../../assets/images/product1/productSlide1.png"
import product2 from "../../assets/images/product1/productSlide2.png"
import product3 from "../../assets/images/product1/productSlide3.png"
import product4 from "../../assets/images/product1/productSlide4.png"
import product5 from "../../assets/images/product1/productSlide5.png"
import { Button } from "@/components";
import React from "react";
import ProductDesc from "@/components/productDesc";
import ReviewCard from "@/components/card/reviewsCard";
import { menCategoryProducts } from "@/products/menCategoryproduct";
import ProductCard from "@/components/card/productCard";
import { Link } from "react-router-dom";
import SimilarProduct from "@/components/SimilarProduct";

interface IProductPage{
    src ?: string
    name ?:string
    price ?:number
}

const ProductPage = (props:IProductPage) => {
    const [price , setPrice] = React.useState(props.price)
    const [count , setcount] = React.useState(1)
    return ( 
        <div className="container m-auto p-5">
            <div className="flex gap-20">
                <div className="productSlider">
                    <SwiperThumbs src={[props.src,product2,product3,product4,product5,product1,product3,product4]}></SwiperThumbs>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold text-gray-500 text-center">Wild Rider SC</h1>
                    <div>
                        <h2 className="text-lg font-medium mb-2">proportions :</h2>
                        <div className="grid grid-cols-5 sizes gap-3">
                            <Button variant="size" name="36"></Button>
                            <Button variant="size" name="37"></Button>
                            <Button variant="size" name="38"></Button>
                            <Button variant="size" name="39"></Button>
                            <Button variant="size" name="40"></Button>
                            <Button variant="size" name="41"></Button>
                            <Button variant="size" name="42"></Button>
                            <Button variant="size" name="43"></Button>
                            <Button variant="size" name="44"></Button>
                            <Button variant="size" name="45"></Button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium mb-2">color :</h2>
                        <div className="flex gap-3">
                            <Button variant="color" color="white"></Button>
                            <Button variant="color" color="black"></Button>
                            <Button variant="color" color="red"></Button>
                            <Button variant="color" color="green"></Button>
                            <Button variant="color" color="yellow"></Button>
                        </div>
                        <h2 className="text-lg font-medium text-center">Delivery from 1 day.</h2>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium mb-2">Availability :</h2>
                        <div className="w-48 h-12 bg-gray-400 rounded-md items-center flex">
                            <button className="w-1/3 text-2xl font-medium" onClick={()=>setcount(count+1)}>+</button>
                            <span className="w-1/3 text-2xl border-x font-medium inline-block text-center text-white">{count}</span>
                            <button className="w-1/3 text-2xl font-medium" onClick={()=>setcount(count-1)}>-</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium mb-2">price :</h2>
                        <h2 className="text-lg font-medium">{props.price}</h2>
                    </div>
                    <div className="h-12 flex justify-between">
                        <span className="text-lg font-medium">Season: spring.autumn</span>
                        <span className="text-4xl font-medium">{(count > 0) ? price * count : 0}$</span>
                    </div>
                    <div className="h-10 flex justify-between">
                        <span className="text-lg font-medium">Delivery from 1 day.</span>
                        <button className="bg-violet-900 text-white text-lg font-bold px-10 py-2 rounded-md">Buy</button>
                    </div>
                </div>
            </div>
            <ProductDesc/>
            <h1 className="text-4xl font-medium text-center my-11">Reviews</h1>
            <div className="grid grid-cols-3 gap-20">
                <ReviewCard/><ReviewCard/><ReviewCard/>
            </div>
            <button className="py-2.5 px-24 text-2xl block mx-auto my-16 font-bold border-black border rounded-lg">Leave feedback</button>
            <h1 className="text-4xl font-medium text-center">Similar products</h1>
            <div className="grid grid-cols-3 gap-24 mt-12 mb-48">
            </div>
        </div>
     );
}
 
export default ProductPage;