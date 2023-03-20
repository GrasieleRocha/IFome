let pratoDeComida;
let bebida;
let sobremesa;
let contador = 0;
let precoPrato;
let precoBebida;
let precoSobremesa;

function escolherPrato(prato, valorDoPrato) {
  pratoDeComida = prato;
  precoPrato = valorDoPrato;

  const selecionado = document.querySelector(".card-dish .selecionado");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const seletor = "." + prato;
  const botao = document.querySelector(seletor);
  if (botao !== null) {
    botao.classList.add("selecionado");
    pratoDeComida = prato;
    contador += 1;
    habilitarBotao();
  }
}

function escolherDrink(bebidaSelecionada, valorDaBebida) {
  bebida = bebidaSelecionada;
  precoBebida = valorDaBebida;

  const selecionado = document.querySelector(".card-drink .selecionado");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const seletor = "." + bebidaSelecionada;
  const botao = document.querySelector(seletor);
  if (botao !== null) {
    botao.classList.add("selecionado");
    bebida = bebidaSelecionada;
    contador += 1;
    habilitarBotao();
  }
}

function escolherSobremesa(sobremesaSelecionada, valorDaSobremesa) {
  sobremesa = sobremesaSelecionada;
  precoSobremesa = valorDaSobremesa;

  const selecionado = document.querySelector(".card-dessert .selecionado");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const seletor = "." + sobremesaSelecionada;
  const botao = document.querySelector(seletor);
  if (botao !== null) {
    botao.classList.add("selecionado");
    sobremesa = sobremesaSelecionada;
    contador += 1;
    habilitarBotao();
  }
}

function habilitarBotao() {
  if (contador === 3) {
    let botaoSelecionar = document.querySelector(".botao");
    botaoSelecionar.classList.add("habilitado");
    botaoSelecionar.style.backgroundColor = "green";
    botaoSelecionar.innerHTML = "Finalizar Pedido";
  }
}

function resumo() {
  let botaoSelecionar = document.querySelector(".botao");
  if (botaoSelecionar.classList.contains("habilitado")) {
    let mensagem = `humm... Que delícia! Você escolheu 

  o prato escolhido foi ${pratoDeComida}, 
  a bebida escolhida foi ${bebida}, 
  e a sobremesa será ${sobremesa}.`;

    alert(mensagem);
    let nomeCompleto = prompt("Qual seu nome completo?");
    let endereco = prompt(
      "Qual seu endereço completo, não se esqueça de colocar ponto de referência."
    );
    alert(`Quase lá, confirme por favor seus dados

  nome: ${nomeCompleto}, 

  endereço: ${endereco}.`);
    alert(
      "Obaaa... logo logo seu pedido chegará, Obrigada por escolher o IFome!"
    );

    let precoTotal = (parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa)).toFixed(2);

    const phone = "5562992046883";
    const recado = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoDeComida}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\n- Total: ${precoTotal}\n\n${nomeCompleto}\n${endereco}`;
    const mensagemEncoded = encodeURIComponent(recado);
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${mensagemEncoded}`;
    window.open(url);
  }
}
