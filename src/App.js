import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias"
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./meusDados/Categorias";
import ArrayDeNotas from "./meusDados/Notas";
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

    this.categorias = new Categorias();
    // this.state = {
      //notas: [],
      //categorias: ["Trabalho", "Esportes"],
    // };
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayNotas,
  //   };
  //   this.setState(novoEstado);
  // }


  // adicionarCategoria(nomeCategoria){
  //   let arrayCategorias = [...this.state.categorias,nomeCategoria];
  //   const novoEstado = {...this.state,categorias:arrayCategorias};
    
  //   this.setState(novoEstado);
  // }

  // deletarNota(index) {
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index, 1);
  //   this.setState(arrayNotas);
  //   console.log("deletar no app");
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}/>
          <ListaDeNotas
            apagarNota={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
