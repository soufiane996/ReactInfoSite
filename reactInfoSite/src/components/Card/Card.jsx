import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"
import userPhoto from "../../assets/naruto-profile-pics.png"
import "./Card.css"
const userAbtSection = "I'm a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";
const userInterstSection ="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."; 


function Card() {
              

     return (
         <div className="card--container"> 
          <CardHeader userPhoto ={userPhoto}/>
          <CardBody 
            name ="Naruto Uzumaki"
            position ="Hokage"
            email ="kuramaUzumaki@village.com" 
            aboutSection ={userAbtSection}
            interestSection ={userInterstSection}
            />
          <CardFooter />
         </div>
     )
              
}




export default Card