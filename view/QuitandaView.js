export class QuitandaView {
  constructor() {
    // Campos - Cadastro
    this.nome = document.getElementById("nome");
    this.preco = document.getElementById("preco");
    this.quantidade = document.getElementById("quantidade");

    // Campos - Entrada de Estoque
    this.nomeEntrada = document.getElementById("nomeEntrada");
    this.quantidadeEntrada = document.getElementById("quantidadeEntrada");

    // Campos - Venda
    this.nomeVenda = document.getElementById("nomeVenda");
    this.quantidadeVenda = document.getElementById("quantidadeVenda");

    // Listas
    this.lista = document.getElementById("lista");
    this.historico = document.getElementById("historico");

    // Botões
    this.btnAdd = document.getElementById("btnAdd");
    this.btnEntrada = document.getElementById("btnEntrada");
    this.btnVenda = document.getElementById("btnVenda");
  }

  renderProdutos(produtos) {
    this.lista.innerHTML = "";

    if (produtos.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nenhum produto cadastrado.";
      this.lista.appendChild(li);
      return;
    }

    produtos.forEach(produto => {
      const li = document.createElement("li");
      li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.qtd}`;
      this.lista.appendChild(li);
    });
  }

  renderHistorico(movs) {
    this.historico.innerHTML = "";

    if (movs.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nenhuma movimentação registrada.";
      this.historico.appendChild(li);
      return;
    }

    movs.forEach(mov => {
      const li = document.createElement("li");
      li.textContent = `${mov.data} - ${mov.tipo} - ${mov.nome} - Qtd: ${mov.qtd}`;
      this.historico.appendChild(li);
    });
  }

  limparCampos(secao) {
    if (secao === "add") {
      this.nome.value = "";
      this.preco.value = "";
      this.quantidade.value = "";
    } else if (secao === "entrada") {
      this.nomeEntrada.value = "";
      this.quantidadeEntrada.value = "";
    } else if (secao === "venda") {
      this.nomeVenda.value = "";
      this.quantidadeVenda.value = "";
    }
  }

  mostrarErro(msg) {
    alert(msg);
  }
}
