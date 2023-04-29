import productDesc from "../../assets/images/product1/ProductDesc.png"
import "./index.css"
const ProductDesc = () => {
    return ( 
        <div className="productDesc shadow-md relative my-20">
            <div className="w-2/3 py-8 px-16">
                <h1 className="text-center text-4xl font-medium">Description</h1>
                <p className="flex flex-col text-center text-2xl font-normal p-10">
                    <span>Model Low shoes</span>
                    <span>These shoes are the golden mean between shoes and boots. A huge advantage is suitable for spring, autumn and until the very height of winter. Low shoes can be preferred from classic to sporty and can be worn with jeans without worry.</span>
                    <span>About shoes: Outside and inside genuine leather, smooth leather combined with rough (grained) gives the shoe a peculiar elegant style. Soft genuine leather fast. When putting on leather shoes, you don’t have to worry that if they are exposed to sunlight or rain, they will begin to release toxic elements or swim in the bright sun. Another property of the skin is that it easily repeats and remembers the contours of the foot. Therefore, they are always comfortable, provided that the size is correctly selected. The sole is made of EVA, it is very light and can withstand about 1000 km of running.</span>
                </p>
            </div>
            <img className="absolute top-0 right-0" src={productDesc} alt="" />
        </div>
     );
}
 
export default ProductDesc;