import Navbar from "../../components/Navbar/navbar"
import Firstcontact from "./../../assets/HomeImg/ContactImg/contactbg.png"

export default function Contact() {
  return (
    <div>
       <Navbar/>
       <div className="flex mt-20">
       <div className=" h-100 w-150 ml-40 ">
       <h1 className="text-5xl text-center mr-25 mb-5">Contact</h1>
        <input type="text" placeholder="Your Name" className="bg-[#8da375] mt-5 w-130 h-14 rounded p-2 text-black focus:outline-none hover:ring-0 hover:border-none"/>

        <input type="text" placeholder="Email" className="bg-[#8da375] mt-5 w-130 h-14 rounded p-2 text-black focus:outline-none hover:ring-0 hover:border-none"/>

        <input type="text" placeholder="Message" className="bg-[#8da375] mt-5 w-130 h-25 rounded p-2 text-black focus:outline-none hover:ring-0 hover:border-none"/>

        <button className="w-130 h-15 mt-5 rounded-4xl text-white bg-[#d18215]">Send Message</button>
        
       </div>
       <div><img src={Firstcontact} alt="" className="w-170 h-170 mt-[-100px] ml-20 "/></div>
       </div>
    </div>
  )
}

 