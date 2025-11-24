import "./Forms.css";
import { useState } from "react";
import Resultado from "../Resultado/Resultado";

function Forms() {
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const presencial = Number(e.target.presencial.value) || 0;
    const remoto = Number(e.target.remoto.value) || 0;
    const deslocamento = Number(e.target.deslocamento.value) || 0;
    const sono = Number(e.target.sono.value) || 0;
    const familiaAmigos = Number(e.target.familiaAmigos.value) || 0;
    const lazerPreferido = e.target.lazer.value;

    const trabalho = presencial + remoto + deslocamento;
    const sonoSemanal = sono;
    const lazerTotal = familiaAmigos;
    const totalOcupado = trabalho + sonoSemanal + lazerTotal;
    const horasLivres = 168 - totalOcupado;

    const mensagem =
      horasLivres >= 30
        ? "Parabéns! Você tem bastante tempo livre!"
        : horasLivres >= 15
        ? "Você tem um equilíbrio razoável."
        : "Cuidado! Você está com pouco tempo livre.";

    setResultado({
      mensagem,
      trabalho,
      lazerTotal,
      sonoSemanal,
      horasLivres,
      lazerPreferido,
    });
  };

  const handleRecalcular = () => setResultado(null);

  if (resultado) {
    return <Resultado data={resultado} onRecalcular={handleRecalcular} />;
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Atividades diárias</h2>
        <p className="lead text-muted">
          Preencha com as horas que você gasta por semana em cada atividade
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="border-custom p-4 mb-4 rounded shadow">
          <h3 className="text-center mb-4">Trabalho</h3>
          <div className="row g-3 justify-content-center">
            <div className="col-md-3">
              <label className="form-label">Presencial</label>
              <input name="presencial" type="number" className="form-control" min="0" required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Remoto</label>
              <input name="remoto" type="number" className="form-control" min="0" required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Deslocamento</label>
              <input name="deslocamento" type="number" className="form-control" min="0" required />
            </div>
          </div>
        </div>

        <div className="border-custom p-4 rounded shadow">
          <h3 className="text-center mb-4">Lazer e Descanso</h3>
          <div className="row g-4 align-items-end">
            <div className="col-md-4">
              <p className="fw-bold">O que você mais gosta no tempo livre?</p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="lazer" id="ler" value="Ler" required />
                <label className="form-check-label" htmlFor="ler">Ler</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="lazer" id="filmes" value="Ver filmes e séries" />
                <label className="form-check-label" htmlFor="filmes">Ver filmes e séries</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="lazer" id="outro" value="Outras atividades" />
                <label className="form-check-label" htmlFor="outro">Outras atividades</label>
              </div>
            </div>

            <div className="col-md-4">
              <label className="form-label">Tempo de sono (horas/semana)</label>
              <input name="sono" type="number" className="form-control" min="0" placeholder="Ex: 56" required />
            </div>

            <div className="col-md-4">
              <label className="form-label">Tempo com família e amigos</label>
              <input name="familiaAmigos" type="number" className="form-control" min="0" required />
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button type="submit" className="btn btn-success btn-lg px-5">
            Calcular
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;