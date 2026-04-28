import { QuitandaModel } from "../model/QuitandaModel.js";
import { QuitandaView } from "../view/QuitandaView.js";

export class QuitandaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.btnAdd.onclick = () => this.addProduto();
    this.view.btnEntrada.onclick = () => this.entradaProduto();
    this.view.btnVenda.onclick = () => this.venderProduto();

    this.atualizar();
  }

  addProduto() {
    try {
      const nome = this.view.nome.value.trim();
      const preco = parseFloat(this.view.preco.value);
      const quantidade = parseInt(this.view.quantidade.value);

      if (!nome || isNaN(preco) || preco <= 0 || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      this.model.adicionar(nome, preco, quantidade);
      this.atualizar();
      this.view.limparCampos("add");
    } catch (error) {
      this.view.mostrarErro(error.message);
    }
  }

  entradaProduto() {
    try {
      const nome = this.view.nomeEntrada.value.trim();
      const quantidade = parseInt(this.view.quantidadeEntrada.value);

      if (!nome || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      this.model.entrada(nome, quantidade);
      this.atualizar();
      this.view.limparCampos("entrada");
    } catch (error) {
      this.view.mostrarErro(error.message);
    }
  }

  venderProduto() {
    try {
      const nome = this.view.nomeVenda.value.trim();
      const quantidade = parseInt(this.view.quantidadeVenda.value);

      if (!nome || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      this.model.vender(nome, quantidade);
      this.atualizar();
      this.view.limparCampos("venda");
    } catch (error) {
      this.view.mostrarErro(error.message);
    }
  }

  atualizar() {
    this.view.renderProdutos(this.model.getProdutos());
    this.view.renderHistorico(this.model.getMovimentacoes());
  }
}
