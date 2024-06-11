import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import "./style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("Matéria Obrigatório")
    .max(40, "precisa ter 40 caracteres no máximo !"),
  descricao: yup
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
      .post("https://665fa6d55425580055b0594f.mockapi.io/posts", data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate('/');
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
              <input type="text" id="matéria" {...register("matéria")} />
              <p className="error-message">{errors.matéria?.message}</p>

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
                <button>Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Posts;