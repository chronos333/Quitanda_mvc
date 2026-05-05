// Model: responsável pelos dados e regras de negócio
export class QuitandaModel {

  // Construtor inicializa os dados
  constructor() {
    this.produtos = [];        // Lista de produtos
    this.movimentacoes = [];   // Histórico de entradas e vendas
  } 

  // Adiciona um novo produto
  adicionar(nome, preco, qtd) {

    // Verifica se já existe um produto com o mesmo nome
    const existe = this.produtos.find(p => p.nome === nome);
    if (existe) {
      throw new Error("Produto já existe. Use 'Entrada de Estoque' para adicionar quantidade.");
    }

    // Adiciona o produto na lista
    this.produtos.push({ nome, preco, qtd });

    // Registra a movimentação como entrada
    this.registrarMov("ENTRADA", nome, qtd);
  }

  // Adiciona quantidade a um produto existente (entrada de estoque)
  entrada(nome, qtd) {

    // Busca o produto pelo nome
    const produto = this.produtos.find(p => p.nome === nome);

    // Se não encontrar, lança erro
    if (!produto) throw new Error("Produto não encontrado.");

    // Soma a quantidade ao estoque atual
    produto.qtd += qtd;

    // Registra a movimentação
    this.registrarMov("ENTRADA", nome, qtd);
  }

  // Realiza a venda de um produto (reduz estoque)
  vender(nome, qtd) {

    // Busca o produto
    const produto = this.produtos.find(p => p.nome === nome);

    // Valida existência
    if (!produto) throw new Error("Produto não encontrado.");

    // Verifica se há estoque suficiente
    if (produto.qtd < qtd) throw new Error("Estoque insuficiente.");

    // Subtrai a quantidade vendida
    produto.qtd -= qtd;

    // Registra a movimentação como venda
    this.registrarMov("VENDA", nome, qtd);
  }

  // Registra qualquer movimentação (entrada ou venda)
  registrarMov(tipo, nome, qtd) {

    // Adiciona no histórico com data/hora atual
    this.movimentacoes.push({
      tipo,                        // ENTRADA ou VENDA
      nome,                        // Nome do produto
      qtd,                         // Quantidade movimentada
      data: new Date().toLocaleString() // Data formatada
    });
  }

  // Retorna lista de produtos
  getProdutos() {
    return this.produtos;
  }

  // Retorna histórico de movimentações
  getMovimentacoes() {
    return this.movimentacoes;
  }
}
