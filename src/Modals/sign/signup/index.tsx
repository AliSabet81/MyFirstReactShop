import { EyeSvgIcone } from "@/assets/svgs";
import { Textfield } from "@/components";
import { useState } from "react";

const SignUp = () => {
    
    return ( 
        <div className="grid grid-cols-2">
            <img className="" src="./Rectangle713.png" alt="" />
            <div className="flex flex-col items-center py-5 !pb-1 px-6">
                <h1 className="text-4xl font-bold">Registration </h1>
                <form className="flex w-full items-center p-5 flex-col gap-5" action="" >
                    <Textfield variant={"signup"} placeholder="Enter your name : "></Textfield>
                    <Textfield variant={"signup"} placeholder="Enter last name :"></Textfield>
                    <Textfield variant={"signup"} placeholder="Enter a new password :"></Textfield>
                    <Textfield variant={"signup"} placeholder="Confirm the password :"></Textfield>
                    <Textfield variant={"signup"} placeholder="Enter number :"></Textfield>
                    <Textfield variant={"signup"} placeholder="Enter email :"></Textfield>
                    <button className="text-2xl text-white py-2 px-24 font-bold bg-slate-800" type="submit">Submit</button>
                </form>
                <div className="flex w-10/12 justify-between">
                    <span className="text-lg font-bold">Have an account?</span>
                    <button className="text-lg text-gray-500 font-bold">Register</button>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;