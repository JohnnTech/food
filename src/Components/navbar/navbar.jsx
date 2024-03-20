import "./navbar.css";
import logo from "../../assets/logo-efg.svg";

function Navbar(){
    return <div className="navbar">
        <img src={logo} className="logotipo" alt="Logotipo" />
        <div className="menu">
            <a href="#">Home</a>
            <a href="#">Reservado</a>
            <a href="#">Reservar</a>
        </div>
    </div>
}
export default Navbar;