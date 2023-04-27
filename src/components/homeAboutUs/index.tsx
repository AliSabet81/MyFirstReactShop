import "./index.css"
const HomeAboutUs = () => {
    return ( 
        <div className="aboutUs container p-10 mb-10 mt-28 m-auto relative overflow-x-clip">
            <div className=" w-1/2 text-white  flex flex-col items-start">
                <h1 className="text-4xl self-center font-bold">About Us</h1>
                <p className="text-xl gap-3 font-medium m-5 !my-7 flex flex-col items-start">
                    <span>
                        The network of the largest shoe stores in Kyrgyzstan!
                    </span>
                    <span>
                        Lion is a well-known brand of Turkish footwear, represented in Kyrgyzstan by a chain of stores in three cities: Bishkek, Osh and Jalal-Abad. Collections of men's, women's, children's shoes and accessories are presented in a wide range, updated according to the season and fashion trends.
                    </span>
                    <span>
                        The company's products are made from environmentally friendly materials and genuine leather in accordance with international quality standards. Shoes are designed and manufactured by qualified craftsmen working in Turkey. Shopping in Lion stores is suitable for all occasions and different styles - classics, sports, casual models, versatile shoes and much more.
                    </span>
                
                </p>
            </div>
            <img className="absolute bottom-8 -right-36" src="HomeAboutUs.png" alt="" />
        </div>
     );
}
 
export default HomeAboutUs;