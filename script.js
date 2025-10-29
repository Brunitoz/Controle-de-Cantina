// Espera o documento HTML ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Seleciona os elementos que vamos usar
    const botao = document.getElementById('btn-prato-dia');
    const displayResultado = document.getElementById('resultado-prato');

    // 2. Define uma lista de possíveis pratos do dia
    const pratosDoDia = [
        "Feijoada Completa",
        "Strogonoff de Frango com Batata Palha",
        "Lasanha à Bolonhesa",
        "Bife à Parmegiana",
        "Peixe Grelhado com Legumes"
    ];

    // 3. Adiciona um "ouvinte de evento" ao botão.
    // Isso faz com que a função seja executada toda vez que o botão é clicado.
    botao.addEventListener('click', function() {
        
        // Gera um número aleatório baseado no tamanho da lista de pratos
        // Math.random() gera um número entre 0 e 0.99...
        // Multiplicamos pelo tamanho da lista (ex: 5) para ter um número entre 0 e 4.99...
        // Math.floor() arredonda para baixo (ex: 4.99... vira 4)
        const indiceAleatorio = Math.floor(Math.random() * pratosDoDia.length);

        // Seleciona o prato da lista usando o índice aleatório
        const pratoSorteado = pratosDoDia[indiceAleatorio];

        // 4. Mostra o resultado na tela
        displayResultado.textContent = `A sugestão de hoje é: ${pratoSorteado}!`;
    });

});
