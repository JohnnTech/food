import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar(){
    return <div className="navbar">
        <img src={logo} className="logotipo" alt="Logotipo" />
    </div>
}
export default Navbar;