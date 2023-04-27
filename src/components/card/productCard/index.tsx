import { HeartSvgIcon, ShoppingSvgIcon } from "@/assets/svgs";
import "./index.css"
interface IProductCard {
    src : string
    name : string
    price : number
}

const ProductCard = (props:IProductCard) => {
    return ( 
        <div className="p-2 shadow self-center relative productCard">
            <img className="shadow" src={props.src} alt="" />
            <div className="absolute flex flex-col gap-1.5 top-3 right-3">
                <button><HeartSvgIcon /></button>
                <button><ShoppingSvgIcon/></button>
            </div>
            <div className="flex justify-between items-center productCardDesc font-bold">
                <span className="text-2xl ">{props.name}</span>
                <span className="text-4xl ">{props.price}$</span>
            </div>
        </div>
     );
}
 
export default ProductCard;