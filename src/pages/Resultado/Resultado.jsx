import "./Resultado.css";
import EmojiFeliz from "../../assets/emoji_feliz.png";
import EmojiTriste from "../../assets/emoji_triste.png";
import EmojiAtencao from "../../assets/emoji_atencao.png";
import { useNavigate } from "react-router-dom";

function Resultado({ data, onRecalcular }) {
  const navigate = useNavigate();

  const definirEmoji = () => {
    const trabalhaMuito = data.trabalho > 60;
    const lazerBaixo = data.lazerTotal < 15;
    const horasLivresBoas = data.horasLivres >= 30;

    if (horasLivresBoas && !trabalhaMuito) return EmojiFeliz;
    if (trabalhaMuito || lazerBaixo) return EmojiTriste;
    return EmojiAtencao;
  };

  const emojiSrc = definirEmoji();

  return (
    <div className="container mt-5 border-custom">
      <div className="row text-center mt-5">
        <h2 className="fs-1 text-primary">Seu resultado semanal</h2>
        <p className="fs-4 mt-4 fw-bold text-success">{data.mensagem}</p>
      </div>

      <div className="row justify-content-center my-5">
        <div className="col-12 text-center">
          <img
            src={emojiSrc}
            alt="Seu equilíbrio semanal"
            className="img-fluid"
            style={{
              maxWidth: "200px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      </div>

      <div className="row text-center mb-4">
        <div className="col-12">
          <div className="alert alert-info fs-5">
            <strong>No tempo livre, você gosta de:</strong> {data.lazerPreferido}
          </div>
        </div>
      </div>

      <div className="row text-center mb-4 g-4">
        <div className="col-md-4">
          <div className="card text-bg-warning shadow">
            <div className="card-body text-center">
              <h5>Trabalho + deslocamento</h5>
              <h3 className="display-5 fw-bold">{data.trabalho}</h3>
              <small className="text-muted">horas/semana</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-bg-primary shadow">
            <div className="card-body text-center">
              <h5>Sono</h5>
              <h3 className="display-5 fw-bold">{data.sonoSemanal}</h3>
              <small className="text-muted">horas/semana</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-bg-success shadow">
            <div className="card-body text-center">
              <h5>Lazer</h5>
              <h3 className="display-5 fw-bold">{data.lazerTotal}</h3>
              <small className="text-muted">horas/semana</small>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mb-5">
        <p className="fs-3">
          Você tem{" "}
          <strong
            className={
              data.horasLivres >= 30
                ? "text-success"
                : data.horasLivres >= 15
                ? "text-warning"
                : "text-danger"
            }
          >
            {data.horasLivres} horas livres
          </strong>{" "}
          por semana!
        </p>
      </div>

      <div className="row mb-5">
        <div className="col d-flex justify-content-center gap-4 flex-wrap">
          <button className="btn btn-warning btn-lg px-5" onClick={onRecalcular}>
            Recalcular
          </button>
          <button className="btn btn-danger btn-lg px-5" onClick={() => navigate("/")}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resultado;