
const prevButton = document.getElementById('prev'); // Botão anterior
const nextButton = document.getElementById('next'); // Botão próximo
const items = document.querySelectorAll('.item');   // Itens do carrossel
const dots = document.querySelectorAll('.dot');     // Pontos indicadores
const numberIndicator = document.querySelector('.numbers'); // Indicador numérico (opcional)

let active = 0; // Índice atual ativo
const total = items.length; // Total de itens
let timer; // Usado para o auto slide (opcional)

function update(direction) {
    // Remove a classe 'active' do item e ponto atuais
    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    // Atualiza o índice ativo
    active += direction;

    // Verifica os limites (faz o loop para o início ou fim)
    if (active < 0) {
        active = total - 1; // Vai para o último item
    } else if (active >= total) {
        active = 0; // Volta para o primeiro item
    }

    // Adiciona a classe 'active' ao novo item e ponto
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número atual no indicador (se existir)
    
        numberIndicator.textContent = String(active+1).padStart(2,'0')
    
    clearInterval(timer)
    timer=setInterval(() => {
        update(1);
    }, 5000); 
}

// Eventos dos botões
prevButton.addEventListener('click', () => {
    update(-1); // Vai para o item anterior
});

nextButton.addEventListener('click', () => {
    update(1); // Vai para o próximo item
});




startAutoSlide(); // Inicia o carrossel automático ao carregar a página
