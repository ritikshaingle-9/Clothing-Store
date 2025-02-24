export default function Footer(){
  return (
    <div>
        <div className="w-full h-[300px] bg-[#8da375] mt-10 flex flex-row justify-evenly">
         <div className="flex flex-col">
            <h3 className="text-2xl mt-5 font-medium mb-4">Customer Care</h3>
             <div>Contact Us</div>
             <div>FAQs</div>
             <div>Track your order</div>
             <div>Common issues</div>
             <div>Shipping</div>
        </div>
         <div>
            <h3 className="text-2xl mt-5 font-medium mb-4">Our Campany</h3>
            <div>Our Story</div>
            <div>About Us</div>
            <div>Contact</div>
            <div>Support</div>
         </div>
         <div>
            <h3 className="text-2xl mt-5 font-medium mb-4">Legal Area</h3>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Assesibility Statement</div>
         </div>
         <div>
            <h3 className="text-2xl mt-5 font-medium mb-4">Follow Us</h3>
           
        </div>
        </div>
    </div>
  );
}