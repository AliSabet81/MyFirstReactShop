import { EyeSvgIcone, EyeSvgIcone2 } from "@/assets/svgs";
import { Textfield } from "@/components";
import { useState } from "react";
import "./index.css"

const SignIn = (props:any) => {
    const [isShown, setIsSHown] = useState(false);
    const chancheShow = () =>{
        setIsSHown(!isShown)
    }
    return ( 
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col items-center py-5 px-6 gap-2">
                <h1 className="text-4xl font-bold">LOGIN </h1>
                <form className="flex w-full p-10 flex-col gap-8" action="" >
                    <Textfield variant={"signin"} name="Name :"></Textfield>
                    <Textfield variant={"signin"} name="Surname :"></Textfield>
                    <Textfield variant={"signin"} name="e-mail :"></Textfield>
                    <Textfield variant={"signin"} name="Password :" type={isShown ? "text" : "password"} endicone={<button onSubmit={(e) => e.preventDefault()} onMouseDownCapture={()=>chancheShow()}>{isShown ? <EyeSvgIcone2/>:<EyeSvgIcone/> }</button>}></Textfield>
                    <button className="text-2xl text-white py-2.5 px-24 font-bold bg-slate-800" type="submit">Submit</button>
                </form>
                <div className="flex w-10/12 justify-between">
                    <span className="text-lg font-bold">Don't have an account?</span>
                    <button className="text-lg text-gray-500 font-bold">Register</button>
                </div>
            </div>
            <img className="" src="./Rectangle714.png" alt="" />
        </div>
    );
}
 
export default SignIn;