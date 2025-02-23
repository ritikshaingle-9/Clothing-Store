import Button from "../../components/Button/button"
import Navbar from "../../components/Navbar/navbar"
import Shopcard from "../../components/Shopcard/shopcard"
import firstbg from "./../../assets/HomeImg/shopping-1.png"

export default function Home() {
  return (
    <div className="bg-[#bb9457]">
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
  
        <Shopcard Cardimg="" Dressname="" Fabric="" Discountamount="" Actualamount="" OFF="" />
        
    </div>
  )
}

 