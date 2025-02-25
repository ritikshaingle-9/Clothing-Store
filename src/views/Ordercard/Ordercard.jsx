import Navbar from "./../../components/Navbar/navbar"
import firstdress from "./../../assets/HomeImg/dress-1.jpg"
import {Star as IconStar} from "lucide-react"


function Ordercard() {
  return (
    <div>
        <Navbar/>
        <div className="flex ">
         <div className="mt-10 ml-20"><img src={firstdress} className=" h-120 w-120 object-cover"/></div>
         <div className="w-220 h-120 mt-10 font-medium pl-5 pt-5">
            <h1 className="text-xl text-[#8a8a5c]">Sheetal Associates</h1>
            <h2 className="text-2xl">Women A-line Red Dress</h2>
            <h3 className="text-green-600">Special Price</h3>
            <div className="flex flex-row">
             <h2 className="text-3xl font-bold">Rs.1420</h2>
             <del className="text-xl ml-3 mt-1.5  text-[#8a8a5c]">₹262</del>
             <div className="text-green-600 text-lg ml-5 mt-2">(20% OFF)</div>
            </div>
             <div className="flex flex-row"><div className="bg-green-600 rounded-2xl text-lg pl-4 mt-4 w-20 py-1 h-8 text-white">4.1  <IconStar className="mt-[-22px] ml-7 mx-10 h-4 " />
             </div>
             <h2 className="text-[#8a8a5c]">27,329 ratings and 1,485 reviews</h2>
             </div>
            
         </div>
        </div>
    </div>
  );
}

export default Ordercard