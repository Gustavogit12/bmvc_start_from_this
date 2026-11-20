document.addEventListener("DOMContentLoaded", function () {
    var simulador = document.getElementById("simulador");
    var caixa = document.getElementById("resultado");
    var titulo = document.getElementById("resultado-titulo");
    var texto = document.getElementById("resultado-texto");
    var botoesAtaque = document.querySelectorAll(".btn-atacar");
    var botaoSortear = document.getElementById("btn-sortear");

    // Dados do inimigo, que vêm do objeto Python pelo template
    var nomeInimigo = simulador.getAttribute("data-inimigo");
    var defesaInimigo = Number(simulador.getAttribute("data-defesa"));

    function mostrar(tituloTexto, mensagem) {
        titulo.textContent = tituloTexto;
        texto.textContent = mensagem;
        caixa.classList.remove("oculto");
    }

    function numeroEntre(minimo, maximo) {
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    // 1. Simular um ataque contra o inimigo
    for (var i = 0; i < botoesAtaque.length; i++) {
        botoesAtaque[i].addEventListener("click", function () {
            var nome = this.getAttribute("data-nome");
            var ataque = Number(this.getAttribute("data-ataque"));

            var critico = Math.random() < 0.25;
            var danoBruto = critico ? ataque * 2 : ataque;
            var danoFinal = Math.max(1, danoBruto - defesaInimigo);

            if (critico) {
                mostrar("⚡ Acerto crítico!",
                    nome + " causou " + danoFinal + " de dano a " + nomeInimigo + ".");
            } else {
                mostrar("🗡️ Ataque normal",
                    nome + " causou " + danoFinal + " de dano a " + nomeInimigo + ".");
            }
        });
    }

    // 2. Sortear os atributos de um novo semideus
    botaoSortear.addEventListener("click", function () {
        var hp = numeroEntre(105, 150);
        var energia = numeroEntre(65, 90);
        var ataque = numeroEntre(20, 31);
        var defesa = numeroEntre(10, 19);

        mostrar("🎲 Ficha sorteada",
            "HP: " + hp + " | Energia: " + energia +
            " | Ataque: " + ataque + " | Defesa: " + defesa);
    });
});