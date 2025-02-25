import Button from "../../components/Button/button";
import Navbar from "../../components/Navbar/navbar";

 export default function Register() {
  return (
    <div>
        <div>
            <Navbar/>
            <div className="bg-[#bfd9d2] bg-opacity-50 w-110 h-120 rounded-xl ml-140 mt-12">
                <h1 className="text-center text-2xl font-medium p-3 rounded-t-xl bg-[#1d302b] text-white h-15">SIGN UP</h1>
                <input type="text" placeholder="Username" className="w-100 h-12 p-3  align-center focus:outline-none hover:ring-0 hover:border-none bg-white mt-10 ml-5 rounded-xl"/>

                <input type="email" placeholder="Email" className="w-100 h-12 p-3  align-center focus:outline-none hover:ring-0 hover:border-none bg-white mt-5 ml-5 rounded-xl"/>

                <input type="tel" placeholder="Phone No" className="w-100 h-12 p-3  align-center focus:outline-none hover:ring-0 hover:border-none bg-white mt-5 ml-5 rounded-xl"/>

                <input type="password" placeholder="Password" className="w-100 h-12 p-3  align-center focus:outline-none hover:ring-0 hover:border-none bg-white mt-5 ml-5 rounded-xl"/>
                
                <button className="ml-5 my-5 mt-10 bg-[#e68f17] text-center text-white border-amber-400 p-2 rounded w-100">Login</button>

                
            </div>
        </div>
    </div>
  )
}
