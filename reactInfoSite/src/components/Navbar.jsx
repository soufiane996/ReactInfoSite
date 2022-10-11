import logo from '../assets/react.svg';
import '../components/Navbar.css'
function Navbar() {
  

    return (
      
      <nav className="container">
          <img  className="nav--logo"  src={logo} ></img>
          <h3   className="nav--logo_text" >React Facts</h3>
          <h4   className="nav--coursName" >React Course - Project 1</h4>
      </nav>
      
    )
  }
  
  export default Navbar
  