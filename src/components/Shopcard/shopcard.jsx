
export default function Shopcard({Cardimg,Dressname,Fabric,Discountamount,Actualamount,OFF}) {
  return (
    <div>
        <div className="bg-[#EDF4F2] w-[270px] h-[430px]  flex flex-col">
         <div className="h-[200px] w-full"><img src={Cardimg} className="h-[300px] w-full object-cover"/></div>
         <p className="text-xl font-bold bg-[#EDF4F2] text-black mt-25 pl-3 pt-2">{Dressname}</p>
         <p className="text-sm pl-3 text-[#5c5c3d]">{Fabric}</p>
         <h2 className="text-xl font-bold pl-3">Rs.{Discountamount}
             <del className="text-xs ml-2">{Actualamount}</del>
             <h5 className="text-amber-600 text-sm">({OFF}) OFF</h5>
        </h2>
        </div>
    </div>
  )
}

