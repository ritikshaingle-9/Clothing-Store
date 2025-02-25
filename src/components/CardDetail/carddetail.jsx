import Navbar from "./../Navbar/navbar"
import firstdress from "./../../assets/HomeImg/dress-1.jpg"
import {Star as IconStar} from "lucide-react"
import {Tag as IconTag} from "lucide-react"
import Button from "./../Button/button";


export default function CardDetail({Dressimg,Brandname,Dressname,Discountprice,Actualprice,Off,Ratestar,Ratinguser,Reviewuser}){ 
  return (
    <div>
        <div className="flex ">
         <div className="mt-10 ml-20"><img src={Dressimg} className=" h-120 w-120 object-cover"/></div>
         <div className="w-220 h-120 mt-4 font-medium pl-5 pt-5">
            <h1 className="text-xl text-[#8a8a5c]">{Brandname}</h1>
            <h2 className="text-2xl">{Dressname}</h2>
            <h3 className="text-green-600">Special Price</h3>
            <div className="flex flex-row">
             <h2 className="text-3xl font-bold">{Discountprice}</h2>
             <del className="text-xl ml-3 mt-1.5  text-[#8a8a5c]">{Actualprice}</del>
             <div className="text-green-600 text-lg ml-5 mt-2">({Off}% OFF)</div>
            </div>
             <div className="flex flex-row"><div className="bg-green-600 rounded-2xl text-lg pl-4 mt-4 w-20 py-1 h-8 text-white">{Ratestar} <IconStar className="mt-[-22px] ml-7 mx-10 h-4 " />
             </div>
             <h2 className="text-[#8a8a5c] mt-5 ml-2">{Ratinguser} ratings and {Reviewuser} reviews</h2>
             </div>
            <div className="text-[#8a8a5c] mt-5 ml-3 text-xl flex flex-row "><div>Size - </div>
            <div className="bg-[#ebebe0] border-[#adad85] h-10 text-center items-center pt-1 w-10 ml-4 mt-[-5px]">XS</div> 
            <div className="bg-[#ebebe0] border-[#adad85] h-10 text-center items-center pt-1 w-10 ml-4 mt-[-5px]">S</div> 
            <div className="bg-[#ebebe0] border-[#adad85] h-10 text-center items-center pt-1 w-10 ml-4 mt-[-5px]">M</div>
            <div className="bg-[#ebebe0] border-[#adad85] h-10 text-center items-center pt-1 w-10 ml-4 mt-[-5px]">L</div>
            <div className="bg-[#ebebe0] border-[#adad85] h-10 text-center items-center pt-1 w-10 ml-4 mt-[-5px]">XL</div>
            </div>

           <p className="ml-3 mt-6 mb-3 text-xl">Available offers</p>
           <div className="flex flex-col ml-4">
            <div className="flex flex-row"><IconTag className="mr-2 h-5 w-5 mt-1" />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</div>
            <div className="flex flex-row"><IconTag className="mr-2 h-5 w-5 mt-1" />Bank Offer10% off up to ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure. Min Txn Value: ₹5000T&C</div>
            <div className="flex flex-row"><IconTag className="mr-2 h-5 w-5 mt-1" />Bank Offer10% off up to ₹1,500 on HDFC Bank Credit Card EMI on 12months and above tenure. Min Txn Value:₹5000T&C</div>
            <div className="flex flex-row"><IconTag className="mr-2 h-5 w-5 mt-1" />Special PriceGet extra 34% off (price inclusive of cashback/coupon)T&C</div>
            </div>
            <div className="flex flex-row"><div className="mt-6 ml-5"><Button buttontext="Order"/></div>
            <div className="mt-6 ml-[-70px]"><Button buttontext="wishlist"/></div>
            </div>
         </div>
        </div>
    </div>
  );
}

