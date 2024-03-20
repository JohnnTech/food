import "./laboratorio.css"

function Laboratorios(){
    return <div className="lab-box text-center">
        <div>
            <h2>Laboratório de Informática</h2>
            <p className="lab-responsavel-descricao">Responsável: Johnattan </p>
            <p className="lab-horario">08h às 12h</p>
        </div>
        <div>
            <button className="btn btn-cart"> 
                Ver
            </button>
        </div>
    </div>
}

export default Laboratorios;