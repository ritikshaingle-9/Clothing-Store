import firstdress from "./../../assets/HomeImg/dress-1.jpg"

export default function Shopcard({Cardimg,Dressname,Fabric,Discountamount,Actualamount,OFF}) {
  return (
    <div>
        <div className="bg-white w-[350px] h-[400px] m-20 flex flex-col">
         <div className="h-[200px] w-full"><img src={firstdress} className="h-[350px] w-full object-cover"/></div>
         <p className="text-xl font-bold bg-white mt-37 pl-2 pt-2">SKIRT AND TOP</p>
         <p className="text-sm pl-2 text-[#7a7a52]">Pure Cotton Plane Set</p>
         <h2 className="text-xl font-bold pl-2">Rs.1420
             <del className="text-xs">Rs.2900</del>
             <h5 className="text-amber-500">(50% OFF)</h5>
        </h2>
        </div>
    </div>
  )
}

