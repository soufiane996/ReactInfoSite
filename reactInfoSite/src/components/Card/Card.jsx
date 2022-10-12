import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

const imgUrl = "../../assets/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png"; 
const userAbtSection = "Naruto Uzumaki about section";
const userInterstSection ="Naruto Uzumakin Interests Section"; 


function Card() {
              

     return (
         <> 
          <CardHeader src ={imgUrl}/>
          <CardBody 
            name ="Naruto Uzumaki"
            position ="Hokage"
            email ="kuramaUzumaki@village.com" 
            aboutSection ={userAbtSection}
            interestSection ={userInterstSection}
            />
          <CardFooter />
         </>
     )
              
}




export default Card