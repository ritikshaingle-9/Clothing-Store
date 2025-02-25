import Button from "../../components/Button/button"
import Navbar from "../../components/Navbar/navbar"
import Shopcard from "../../components/Shopcard/shopcard"
import firstbg from "./../../assets/HomeImg/shopping-1.png"

import firstdress from "./../../assets/HomeImg/dress-1.jpg"
import seconddress from "./../../assets/HomeImg/dress-2.png"
import thirddress from "./../../assets/HomeImg/dress-3.png"
import fourthdress from "./../../assets/HomeImg/dress-4.png"

import section3bg from "./../../assets/HomeImg/bg-section3.png"
import Footer from "../../components/Footer/footer"

export default function Home() {
  return (
    <div className="bg-white">
        <Navbar/>

        <div className="flex justify-around mt-[50px]">
        <div className="w-[700px] mt-[-20px] ml-[-90px]">
            <p className="text-7xl text-center mt-[70px]">Discover and<br/></p>
            <p className="text-7xl text-center mt-2 ml-12">Find Your Own</p>
            <p className="text-7xl text-center mt-2 mr-38">Fashion!</p>
            <h2 className="text-3xl text-center mt-6 ml-35">Where Shopping Meets Convenience! 🛍️</h2>
            <div className="mt-10 ml-67"><Button buttontext="EXPLORE!!"/></div>
        </div>
     
        <div><img src={firstbg} alt="shooping" className="w-[500px] h-[500px]" /></div>
        </div>
 
        <h1 className="text-5xl text-center font-medium text-black mt-[70px]">Our Top Selling</h1>
        <div className="flex flex-wrap justify-evenly">
        <div className="mx-2 mt-20"><Shopcard Cardimg={firstdress} Dressname="Skirt And Top" Fabric="Plane shiffron top and skirt" Discountamount="1420" Actualamount="2000" OFF="50%" /></div>

        <div className="mx-2 mt-20"><Shopcard Cardimg={seconddress} Dressname="Skirt And Top" Fabric="Plane shiffron top and skirt" Discountamount="1420" Actualamount="2000" OFF="50%" /></div>

        <div className="mx-2 mt-20"><Shopcard Cardimg={thirddress} Dressname="Skirt And Top" Fabric="Plane shiffron top and skirt" Discountamount="1420" Actualamount="2000" OFF="50%" /></div>

        <div className="mx-2 mt-20"><Shopcard Cardimg={fourthdress} Dressname="Skirt And Top" Fabric="Plane shiffron top and skirt" Discountamount="1420" Actualamount="2000" OFF="50%" /></div>

        <div className="mx-2 mt-20"><Shopcard Cardimg={firstdress} Dressname="Skirt And Top" Fabric="Plane shiffron top and skirt" Discountamount="1420" Actualamount="2000" OFF="50%" /></div>
        </div>

        <div className=" bg-[#EDF4F2] bg-opacity-50 w-full h-130 mt-20 ">
            <div className="flex justify-around">

            <img src={section3bg} className="h-120 w-120 mt-6"/> 
            <div className="mr-[100px]"> 
            <h1 className="text-5xl mt-8 text-center font-medium">EXCLUSIVE OFFERS!!</h1>
            <p className="text-center text-2xl mt-5">Ends in</p>
            <div className="flex flex-row mt-10 justify-evenly">
                <div className="bg-white h-30 w-30 rounded-xl text-center items-center text-6xl pt-3">30
                    <h2 className="text-xl">Days</h2>
                </div>
                <div className="bg-white h-30 w-30 rounded-xl text-center items-center text-6xl pt-3">30
                    <h2 className="text-xl">Hours</h2>
                </div>
                <div className="bg-white h-30 w-30 rounded-xl text-center items-center text-6xl pt-3">30
                    <h2 className="text-xl">Seconds</h2>
                </div>
            </div>
            <div className="mt-10 ml-40"><Button buttontext="OrderNow!!"/></div>
            </div>
           
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

 