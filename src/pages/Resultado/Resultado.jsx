import "./Resultado.css";
import Emoji from "../../assets/emoji_feliz.png";
import { useNavigate } from "react-router-dom";

function Resultado() {

    const navigate = useNavigate();

    function voltarHome() {
    navigate("/");
    }

    function recalcular() {
    navigate("/forms");
  }
  return (
    <div>

        <div className="container mt-5 border-custom">

            <div className="row text-center mt-1">
                <p class="fs-5 mt-5">Boa divisão entre trabalho e lazer! Continue assim.</p>
            </div>

            <div className="row text-center">
                <img className="img-fluid w-25 d-block mx-auto pb-2" src={Emoji} alt="" />
            </div>
            
            <div className="row mb-5">
                <div className="col d-flex justify-content-center p-2 gap-5 ">
                    <button className="btn btn-warning me-2 w-25" onClick={recalcular}>Recalcular</button>
                    <button className="btn btn-danger w-25" onClick={voltarHome}>Fechar</button>
                </div>
            </div>


        </div>

    </div>
  );
}

export default Resultado;