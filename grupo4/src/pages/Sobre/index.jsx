import React from 'react'
import Header from "../../components/Header";
import "./style.css";
import rafa from "../../assets/rafa.jpg"
import bea from "../../assets/bea.jpg"
import edu from "../../assets/edu.jpg"
import iza from "../../assets/iza.jpg"
import felipe from "../../assets/felipe.jpg"
import amanda from "../../assets/amanda.jpg"



function Sobre() {
  return (
    <div>
      <Header />
      <div className="container_sobre">
        <div className="bloco_sobre">
          <div className="titulo_sobre">
            <br />
            <h1>O que é Owl-Card?</h1>
            <br />
            <div className="texto_sobre">
              <p>
                Owl-Card é um projeto de organização pessoal que contém uma
                maneira eficiente de revisão de estudos, utilizando os
                popularmente conhecidos como 'Flash Cards' ou 'Cartões de
                Revisão'. Esse método permite que o Usuário crie uma pergunta e
                uma resposta pertencente a alguma área de conhecimento para
                conseguir revisá-la sempre que necessário.
              </p>
            </div>
            <br />
            <br />
          </div>
        </div>

        <div className="bloco_beneficios">
          <div className="titulo_beneficios">
            <br />
            <h1>Quais são os benefícios da Ferramenta?</h1>
            <br />
            <div className="texto_beneficios">
              <p>
                O melhor método de fazer com que o nosso cérebro aprenda algum
                conteúdo é fazer com que ele repita uma ação diversas vezes,
                para que assim a memória de curto prazo se transforme em uma
                memória de longo prazo, evitando o esquecimento. Por isso o
                método de revisão por Flash Cards é tão importante. Pois, o
                consumo rápido e fácil de informações permite que nosso cérebro
                absorva melhor um conteúdo.
              </p>
            </div>
            <br />
            <br />
          </div>
        </div>

          <div className="titulo">
            <br />
            <h2>Conheça os Desenvolvedores do Projeto:</h2>
            <br />
          </div>

        <div className="bloco_devs">
          

          <div className="cards">

            <div className="card">
              <img src={rafa} alt="Imagem de exemplo" className="card-image" />

              <div className="overlay">
                <p>
                  Me chamo Rafaela Beber, tenho 18 anos e estou cursando a
                  residência de software SERRATEC juntamente com o curso de
                  tecnologia da informação e comunicação da FAETERJ.
                </p>
              </div>
            </div>

            <div className="card">
              <img src={bea} alt="Imagem de exemplo" className="card-image" />

              <div className="overlay">
                <p>Me chamo Beatriz Raposo, tenho 22 anos e estou cursando a residência 
                  de software SERRATEC juntamente com o curso de publicidade e propaganda.</p>
              </div>
            </div>

            <div className="card">
              <img src={edu} alt="Imagem de exemplo" className="card-image" />

              <div className="overlay">
                <p>
                  Me chamo Eduardo Manoel, tenho 18 anos e atualmente estou
                  cursando o Serratec em busca de conhecer essa área de
                  tecnologia e conseguir um emprego nessa área.
                </p>
              </div>
            </div>

              <div className="card">
              <img src={iza} alt="Imagem de exemplo" className="card-image" />

               <div className="overlay">
                <p>
                Sou Izabella Prandino de Lucca, tenho 18 anos e estudo programação
                 com o objetivo de me tornar uma desenvolvedora FullStack. 
                 Atualmente sou residente em de TIC/Software do Serratec.
                </p>
                </div>
              </div>

              <div className="card">
              <img src={felipe} alt="Imagem de exemplo" className="card-image" />

               <div className="overlay">
                <p>
                Me chamo Felipe Cauê, tenho 19 anos e estou atualmente cursando 
                a resistência em TIC/Software do SerraTec.
                </p>
                </div>
              </div>

              
              <div className="card">
              <img src={amanda} alt="Imagem de exemplo" className="card-image" />

               <div className="overlay">
                <p>
                Meu nome é Amanda Bernardes, tenho 27 anos, sou graduada em 
                Relações Internacionais e estou cursando a residência em TIC/Software do SerraTec.
                </p>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );

}
export default Sobre