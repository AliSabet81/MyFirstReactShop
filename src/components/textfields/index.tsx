import React, { ReactElement } from "react"

interface TextfieldType extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: "header" | "signin" | "signup" | "contained"  | "outlined";
    label ?: string;
    endicone ?: string | ReactElement;
}

export const Textfield = (props: TextfieldType) =>{
    switch (props.variant) {
        case "signup": return (<input {...props} type="text" className="w-80 placeholder-gray-500 text-lg font-medium h-12 border-2 p-2.5 rounded-md border-black" />)
        case "signin": return (
            <>
                <label className="flex relative justify-between items-center">
                    <span className="text-gray-500 text-lg font-medium">{props.name}</span>
                    <input {...props} type={props.type ? props.type : "text"} className="w-72  h-12 border-2 p-2.5 rounded-md shadow border-gray-500" />
                    <span className="absolute right-3">{props.endicone}</span>
                </label>
            </>
        )
        default: return (<>
        <div className="p-2">
            <label className={`${props.className} flex h-7 w-64 focus-within:border-b-2`}>
                <input {...props} type="text" className="bg-inherit w-56 text-white font-bold text-lg outline-none text-center " />
                <span>{props.endicone}</span>
            </label>
        </div>
        </>)
    }
}




// export const Textfield = (props: TextfieldType) =>{
//     function textfieldClassName() {
//         switch (props.variant) {
//             case "contained": return `w-full my-1
//             block border border-transparent focus-within:border focus-within:border-green-400
//             bg-slate-100 rounded-md  `
//             case "outlined": return `w-full my-1
//             block  focus-within:border focus-within:border-green-400
//             bg-slate-50 rounded-md border border-slate-200`
//             default:
//                 return `w-full my-1
//                 block  focus-within:border-bottom focus-within:border-green-400
//                 bg-slate-50 border-b border-slate-200`
//         }
//     }
//     return(
//         <>
//         <label htmlFor={props.id}>
//             <span>{props.label}</span>
//         </label>
//         <div className={`${textfieldClassName()} rounded-sm flex p-1 items-center`}>
//             <input {...props} className="px-1 py-2 bg-transparent outline-none w-full" type="text" />
//             <span>{props.endicone}
//             </span>
//         </div>
//         </>
//       )
// }
 