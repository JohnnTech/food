import Navbar from "../../Components/navbar/navbar.jsx";
import Laboratorios from "../../Components/laboratorio-efg/laboratorio.jsx";

function Home() {
    return <>
       <Navbar />
       <div className="container">
            <div className="titulo text-center">
                <h1>SIREAG</h1>
                <p className="subtitulo">
                    O SIREAG é um sistema de reserva de ambientes projetado especificamente para atender às necessidades da Escola do Futuro de Goiás Sarah Luiza Lemos Kubitschek. <br />
                </p>
            </div>
       </div>
       <div className="text-center">
            <Laboratorios/>
            <Laboratorios/>
        </div>
    </>
}

export default Home;