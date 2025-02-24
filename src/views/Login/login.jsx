import Button from "../../components/Button/button";
import Navbar from "../../components/Navbar/navbar";

 export default function Login() {
  return (
    <div>
        <div>
            <Navbar/>
            <div className="bg-[#8da375] bg-opacity-50 w-110 h-100 rounded-xl ml-140 mt-20">
                <h1 className="text-center text-2xl font-medium p-3 rounded-t-xl bg-[#5a6b47] text-white h-15">SIGN IN</h1>
                <input type="text" placeholder="Username" className="w-100 h-12 p-3  align-center focus:outline-none hover:ring-0 hover:border-none bg-gray-200 mt-10 ml-5 rounded-xl"/>

                <input type="password" placeholder="Password" className="w-100 h-12 p-3  align-center focus:outline-none hover:ring-0 hover:border-none bg-gray-200 mt-5 ml-5 rounded-xl"/>
                <p className="text-center mt-5 text-lg">Forget Password?</p>
                <button className="ml-5 my-5 bg-[#e68f17] text-center text-white border-amber-400 p-2 rounded w-100">Login</button>

                <p className="text-center">Dont't have an account? Register</p>
               

                
            </div>
        </div>
    </div>
  )
}

