export default function Button({buttontext}) {
  return (
    <div>
        <button className="mr-25 bg-[#e68f17] text-center text-white border-amber-400 p-2 rounded w-30">
        {buttontext}
        </button>
    </div>
  );
}

export function Buttonsmall({buttonsmalltext}){
  return(
    <div>
       <button className="mr-25 bg-[#e68f17] text-center text-white border-amber-400  rounded w-20 h-7 ml-3 mt-3 font-medium">
        {buttonsmalltext}
        </button>
    </div>
  )
}

