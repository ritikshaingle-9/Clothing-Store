import Button from "../Button/button"

export default function Navbar() {
  return (
    <div>
        
        <nav className="flex bg-[#bb9457] h-20  w-full rounded ">
        <div className="container mx-auto flex items-center justify-normal">
           
            <div className="ml-16 text-3xl">Logo</div>
            <div className="mx-auto">
                <button className="bg-[#432818] text-base text-white p-1.5 w-25 rounded m-3">HOME</button>
                <button className="bg-[#432818] text-base text-white p-1.5 w-25 rounded m-3">SHOP</button>
                <button className="bg-[#432818]  text-base text-white p-1.5 w-25 rounded m-3">FEATURES</button>
                <button className="bg-[#432818] text-base text-white p-1.5 w-25 rounded m-3">CONTACT</button>
            </div>
            
            <Button buttontext="LOGIN" />

        </div>
        </nav>












    </div>
  )
}

