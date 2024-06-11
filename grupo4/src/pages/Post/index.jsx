import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import "./style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({

  pergunta: yup
    .string()
    .required("Pergunta Obrigatório")
    .max(100, "precisa ter 100 caracteres no máximo !"),
  resposta: yup
    .string()
    .required("Resposta Obrigatório")
    .max(500, "precisa ter 500 caracteres no máximo !"),
});

function Posts() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .post("http://localhost:8080/flash-cards", data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate("/");
      })
      .catch(() => console.log("Problemas na requisição"));

  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
          <h1>Novo flashCard</h1>
          <hr />
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label htmlFor="matéria">Matéria</label>
              
              <select class="custom-select" aria-label="Default select example">
                <option selected>Clique aqui e selecione a matéria</option>
                <option value="portugues">Português</option>
                <option value="geografia">Geografia</option>
                <option value="quimica">Química</option>
                <option value="historia">História</option>
                <option value="matematica">Matemática</option>
                <option value="biologia">Biologia</option>
                
                <p className="error-message">{errors.matéria?.message}</p>
              </select>

              <label htmlFor="pergunta">Pergunta</label>
              <input type="text" id="pergunta" {...register("pergunta")} />
              <p className="error-message">{errors.pergunta?.message}</p>

              <label htmlFor="resposta">Resposta</label>
              <textarea
                id="resposta"
                rows="10"
                cols="30"
                type="text"
                {...register("resposta")}
              />
              <p className="error-message">{errors.resposta?.message}</p>

              <div className="btn-post">
                <button>Publicar</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Posts;
