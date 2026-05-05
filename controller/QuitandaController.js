// Importa o Model (responsável pelos dados e regras de negócio)
import { QuitandaModel } from "../model/QuitandaModel.js";

// Importa a View (responsável pela interface e exibição)
import { QuitandaView } from "../view/QuitandaView.js";
 
// Controller: faz a ponte entre Model e View
export class QuitandaController {

  // Construtor recebe model e view
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
   
  // Inicializa o sistema
  init() {

    // Define ações dos botões da interface
    this.view.btnAdd.onclick = () => this.addProduto();       // Adicionar produto
    this.view.btnEntrada.onclick = () => this.entradaProduto(); // Entrada de estoque
    this.view.btnVenda.onclick = () => this.venderProduto();   // Venda

    // Atualiza a tela ao iniciar
    this.atualizar();
  }

  // Método para adicionar um novo produto
  addProduto() {
    try {
      // Pega valores dos inputs
      const nome = this.view.nome.value.trim();
      const preco = parseFloat(this.view.preco.value);
      const quantidade = parseInt(this.view.quantidade.value);

      // Validação dos dados
      if (!nome || isNaN(preco) || preco <= 0 || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      // Chama o Model para adicionar o produto
      this.model.adicionar(nome, preco, quantidade);

      // Atualiza a tela
      this.atualizar();

      // Limpa os campos do formulário
      this.view.limparCampos("add");

    } catch (error) {
      // Exibe erro na tela
      this.view.mostrarErro(error.message);
    }
  }

  // Método para entrada de estoque (adicionar quantidade a um produto existente)
  entradaProduto() {
    try {
      // Pega dados do formulário
      const nome = this.view.nomeEntrada.value.trim();
      const quantidade = parseInt(this.view.quantidadeEntrada.value);

      // Validação
      if (!nome || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      // Atualiza estoque no Model
      this.model.entrada(nome, quantidade);

      // Atualiza a interface
      this.atualizar();

      // Limpa os campos
      this.view.limparCampos("entrada");

    } catch (error) {
      this.view.mostrarErro(error.message);
    }
  }

  // Método para vender produto (reduzir estoque)
  venderProduto() {
    try {
      // Pega dados do formulário
      const nome = this.view.nomeVenda.value.trim();
      const quantidade = parseInt(this.view.quantidadeVenda.value);

      // Validação
      if (!nome || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      // Chama o Model para realizar a venda
      this.model.vender(nome, quantidade);

      // Atualiza a interface
      this.atualizar();

      // Limpa os campos
      this.view.limparCampos("venda");

    } catch (error) {
      this.view.mostrarErro(error.message);
    }
  }

  // Atualiza a tela com os dados mais recentes
  atualizar() {

    // Atualiza lista de produtos
    this.view.renderProdutos(this.model.getProdutos());

    // Atualiza histórico de movimentações (entradas e vendas)
    this.view.renderHistorico(this.model.getMovimentacoes());
  }
}
