import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  function irParaOutraPagina() {
    navigate("/forms");
  }

  return (

    <div className="body">

        <div className="lado_texto">

            <h3 className="texto">Descubra se sua rotina está equilibrada!!</h3>
            <p className="paragrafo">Site feito para que você possa equilibrar sua vida profissional e pessoal</p>

            <button className="botao" onClick={irParaOutraPagina}>Calcular</button>

        </div>

    </div>

  );
}

export default Home;