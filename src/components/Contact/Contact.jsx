/* eslint-disable react/prop-types */
export default function Contact({data:{name,number,id},onDelete}) {
    return (
        <div className="border border-black p-1 flex gap-6 max-w-80 items-center rounded p-2">
            <div className="w-full">
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button type="button" className="bg-slate-300 
            border rounded border-slate-950 h-7 p-1 flex justify-center
            items-center hover:bg-slate-200" onClick={() => onDelete(id)} >Delete</button>
        </div>
    )
}