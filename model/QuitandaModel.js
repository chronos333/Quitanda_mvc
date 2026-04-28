export class QuitandaModel {
  constructor() {
    this.produtos = [];
    this.movimentacoes = [];
  }

  adicionar(nome, preco, qtd) {
    const existe = this.produtos.find(p => p.nome === nome);
    if (existe) throw new Error("Produto já existe. Use 'Entrada de Estoque' para adicionar quantidade.");

    this.produtos.push({ nome, preco, qtd });
    this.registrarMov("ENTRADA", nome, qtd);
  }

  entrada(nome, qtd) {
    const produto = this.produtos.find(p => p.nome === nome);
    if (!produto) throw new Error("Produto não encontrado.");

    produto.qtd += qtd;
    this.registrarMov("ENTRADA", nome, qtd);
  }

  vender(nome, qtd) {
    const produto = this.produtos.find(p => p.nome === nome);
    if (!produto) throw new Error("Produto não encontrado.");
    if (produto.qtd < qtd) throw new Error("Estoque insuficiente.");

    produto.qtd -= qtd;
    this.registrarMov("VENDA", nome, qtd);
  }

  registrarMov(tipo, nome, qtd) {
    this.movimentacoes.push({
      tipo,
      nome,
      qtd,
      data: new Date().toLocaleString()
    });
  }

  getProdutos() {
    return this.produtos;
  }

  getMovimentacoes() {
    return this.movimentacoes;
  }
}
