import "./Forms.css"

function Forms() {
  return (
    <div>
      <div className="container mt-5 border-custom">

          <div className="row text-center mt-1">
            <p class="fs-2">Atividades diárias</p>
          </div>

          <div className="row text-center">
            <p class="fs-6">Complete as lacunas com a quantidade de horas que você faz as atividades em uma semana</p>
          </div>

      </div>

      <div className="container mt-5 border-custom">

        <div className="row text-center mt-1">
            <p class="fs-3">Trabalho</p>
        </div>

        <div className="row mb-2 d-flex justify-content-center gap-5">

            <div class="col-3">
              <label for="validationCustom01" class="form-label">Presencial</label>
              <input type="number" class="form-control" id="validationCustom01" placeholder="Em horas:" required/>  
              <div class="valid-feedback">
                Perfeito!!
              </div>
            </div>

            <div class="col-3">
              <label for="validationCustom01" class="form-label">Remoto</label>
              <input type="number" class="form-control" id="validationCustom01" placeholder="Em horas:" required/>  
              <div class="valid-feedback">
                Perfeito!!
              </div>
            </div>

            <div class="col-3">
              <label for="validationCustom01" class="form-label">Deslocamento</label>
              <input type="number" class="form-control" id="validationCustom01" placeholder="Em horas:" required/>  
              <div class="valid-feedback">
                Perfeito!!
              </div>
            </div>

        </div>

        <form className="row mb-2 d-flex justify-content-center ">

          <div className="row text-center mt-1">
            <p class="fs-3">Tempo de lazer</p>
          </div>

          <div className="row mb-2 d-flex justify-content-center gap-5">

            <div className=" col-3 p-0 m-0">

              <p class="fs-6 m-0">O que você prefere fazer?</p>

                <div class="form-check">
                <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                <label class="form-check-label" for="validationFormCheck2">Ler</label>
              </div>

              <div class="form-check mb-3">
                <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
                <label class="form-check-label" for="validationFormCheck3">Ver filmes e Séries</label>
                <div class="invalid-feedback">Escolha uma opção</div>
              </div>

            </div>

            <div class="col-3">
              <label for="validationCustom01" class="form-label">Tempo de sono</label>
              <input type="number" class="form-control" id="validationCustom01" placeholder="Em horas:" required/>  
              <div class="valid-feedback">
                Perfeito!!
              </div>
            </div>

            <div class="col-3">
              <label for="validationCustom01" class="form-label">Tempo com família e amigos</label>
              <input type="number" class="form-control" id="validationCustom01" placeholder="Em horas:" required/>  
              <div class="valid-feedback">
                Perfeito!!
              </div>
            </div>

          </div>

          <div class="row mb-3 col-2 d-flex align-items-end">
            <button class="btn btn-success" type="submit" >Calcular</button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default Forms;