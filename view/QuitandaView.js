// View: responsável pela interface (DOM) e exibição dos dados
export class QuitandaView {

  constructor() {

    // =========================
    // CAMPOS DE CADASTRO
    // =========================

    this.nome = document.getElementById("nome");               // Input nome do produto
    this.preco = document.getElementById("preco");             // Input preço
    this.quantidade = document.getElementById("quantidade");   // Input quantidade inicial

    // =========================
    // CAMPOS DE ENTRADA DE ESTOQUE
    // =========================

    this.nomeEntrada = document.getElementById("nomeEntrada");           // Nome do produto
    this.quantidadeEntrada = document.getElementById("quantidadeEntrada"); // Quantidade a adicionar

    // =========================
    // CAMPOS DE VENDA
    // =========================

    this.nomeVenda = document.getElementById("nomeVenda");           // Nome do produto
    this.quantidadeVenda = document.getElementById("quantidadeVenda"); // Quantidade a vender

    // =========================
    // LISTAS (onde os dados aparecem)
    // =========================

    this.lista = document.getElementById("lista");         // Lista de produtos
    this.historico = document.getElementById("historico"); // Lista de movimentações

    // =========================
    // BOTÕES
    // =========================

    this.btnAdd = document.getElementById("btnAdd");         // Botão adicionar produto
    this.btnEntrada = document.getElementById("btnEntrada"); // Botão entrada estoque
    this.btnVenda = document.getElementById("btnVenda");     // Botão vender produto
  }

  // =========================
  // RENDERIZA LISTA DE PRODUTOS
  // =========================
  renderProdutos(produtos) {

    // Limpa a lista antes de atualizar
    this.lista.innerHTML = "";

    // Se não houver produtos
    if (produtos.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nenhum produto cadastrado.";
      this.lista.appendChild(li);
      return;
    }

    // Cria um <li> para cada produto
    produtos.forEach(produto => {
      const li = document.createElement("li");

      // Exibe nome, preço e quantidade
      li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.qtd}`;

      this.lista.appendChild(li);
    });
  }

  // =========================
  // RENDERIZA HISTÓRICO
  // =========================
  renderHistorico(movs) {

    // Limpa lista antes de atualizar
    this.historico.innerHTML = "";

    // Se não houver movimentações
    if (movs.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nenhuma movimentação registrada.";
      this.historico.appendChild(li);
      return;
    }

    // Cria um <li> para cada movimentação
    movs.forEach(mov => {
      const li = document.createElement("li");

      // Exibe data, tipo (entrada/venda), produto e quantidade
      li.textContent = `${mov.data} - ${mov.tipo} - ${mov.nome} - Qtd: ${mov.qtd}`;

      this.historico.appendChild(li);
    });
  }

  // =========================
  // LIMPA CAMPOS DOS FORMULÁRIOS
  // =========================
  limparCampos(secao) {

    // Limpa formulário de cadastro
    if (secao === "add") {
      this.nome.value = "";
      this.preco.value = "";
      this.quantidade.value = "";

    // Limpa formulário de entrada
    } else if (secao === "entrada") {
      this.nomeEntrada.value = "";
      this.quantidadeEntrada.value = "";

    // Limpa formulário de venda
    } else if (secao === "venda") {
      this.nomeVenda.value = "";
      this.quantidadeVenda.value = "";
    }
  }

  // =========================
  // MOSTRA ERRO
  // =========================
  mostrarErro(msg) {
    alert(msg); // Exibe mensagem simples
  }
}
