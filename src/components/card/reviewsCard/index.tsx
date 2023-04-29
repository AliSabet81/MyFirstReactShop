import { WhiteSvg, YellowSvg } from "@/assets/svgs";
import Review from "../../../assets/images/product1/ReviewCard.png"
import "./index.css"
const ReviewCard = () => {
    return ( 
        <div className="w-444 h-80 p-5 shadow-md rounded-lg border flex flex-col justify-between">
            <div className="flex flex-col gap-6">
                <img className="w-16 h-16" src={Review} alt="" />
                <p className="text-lg">Product packaging is impossible without good UI/UX design. Look for professional contractors and choose based on real needs. Don't forget to check customer reviews and portfolios.</p>
            </div>
            <div className="border-t-2 border-dashed flex justify-between">
                <span className="text-lg font-semibold">Sara</span>
                <div className="flex gap-1">
                    <button><YellowSvg/></button>
                    <button><YellowSvg/></button>
                    <button><YellowSvg/></button>
                    <button><WhiteSvg/></button>
                    <button><WhiteSvg/></button>
                </div>
            </div>
        </div>
     );
}
 
export default ReviewCard;