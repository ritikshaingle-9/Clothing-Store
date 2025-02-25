export default function Footer(){
  return (
    <div>
        <div className="w-full h-[300px] bg-black mt-10 flex flex-row justify-evenly">
         <div className="flex flex-col">
            <h3 className="text-2xl mt-5 font-medium mb-4 text-white mt-10">Customer Care</h3>
             <div className="text-white">Contact Us</div>
             <div className="text-white">FAQs</div>
             <div className="text-white">Track your order</div>
             <div className="text-white">Common issues</div>
             <div className="text-white">Shipping</div>
        </div>
         <div>
            <h3 className="text-2xl mt-5 font-medium mb-4 text-white mt-10">Our Campany</h3>
            <div className="text-white">Our Story</div>
            <div className="text-white">About Us</div>
            <div className="text-white">Contact</div>
            <div className="text-white">Support</div>
         </div>
         <div>
            <h3 className="text-2xl mt-5 font-medium mb-4 text-white mt-10">Legal Area</h3>
            <div className="text-white">Privacy Policy</div>
            <div className="text-white">Terms of Use</div>
            <div className="text-white">Assesibility Statement</div>
         </div>
         <div>
            <h3 className="text-2xl mt-5 font-medium mb-4 text-white mt-10">Follow Us</h3>
           
        </div>
        </div>
    </div>
  );
}