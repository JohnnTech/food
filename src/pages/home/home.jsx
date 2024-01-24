import Navbar from "../../Components/navbar/navbar.jsx";
import ProdutoVitrine from "../../Components/produto-vitrine/produto-vitrine.jsx";

function Home() {
    return <>
       <Navbar />
       <div className="container">
            <div className="titulo text-center">
                <h1>Nosso Cardápio</h1>
                <p className="subtitulo">Clique aqui para colocar is produtos na  sacola de compras.
                Se preferir, você pode pedir pelo WhatsApp: (61) 994525-54285 <br />
                </p>
            </div>

       </div>
       <div className="text-center">
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
        </div>
    </>
}

export default Home;