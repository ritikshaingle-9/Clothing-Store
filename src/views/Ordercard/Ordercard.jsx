import Navbar from "../../components/Navbar/navbar"
import CardDetail from "./../../components/CardDetail/carddetail"
import Firstdress from "./../../assets/HomeImg/dress-1.jpg"

function Ordercard({idno}) {
  return (
    <div>
        <Navbar/>
        <CardDetail idno={idno} Dressimg={Firstdress} Brandname="Sheetal Associates" Dressname="Women A-line Red Dress" Discountprice="Rs.1420" Actualprice="₹2262" Off="20" Ratestar="4.1" Ratinguser="27,329" Reviewuser="1,485"/>
    </div>
  )
}

export default Ordercard