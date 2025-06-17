// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Animação de digitação
  const heroText = document.querySelector('.hero h2');
  heroText.style.animation = 'typing 3.5s steps(40, end)';
  
 
  // Animação ao scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        const delay = element.getAttribute('data-delay') || '0s';
        element.style.transitionDelay = delay;
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Executa uma vez ao carregar a página
  
  // Menu toggle
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    toggle.classList.toggle("open");
  });
  
  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
  
  // Efeito de clique nos itens de preço
  const itens = document.querySelectorAll('.item');
  const mensagemInput = document.getElementById('mensagem');
  
  itens.forEach(item => {
    item.addEventListener('click', () => {
      const corte = item.getAttribute('data-corte');
      mensagemInput.value = `Serviço: ${corte}`;
      mensagemInput.focus();
      
      // Animação de confirmação
      item.style.backgroundColor = 'rgba(255, 230, 0, 0.2)';
      setTimeout(() => {
        item.style.backgroundColor = '';
      }, 500);
      
      window.scrollTo({
        top: document.querySelector('.contato').offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });
});

// Função para enviar WhatsApp
function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, meu nome é ${nome}.\nEmail: ${email}\nGostaria de Agendar o ${mensagem}`;
  const telefone = '5511987040749'; // Substitua com o número da barbearia (com DDD)
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
  
  // Animação de confirmação
  const button = event.target.querySelector('button');
  button.textContent = 'Enviado! ✓';
  button.style.backgroundColor = '#4CAF50';
  
  setTimeout(() => {
    button.textContent = 'Enviar pelo WhatsApp';
    button.style.backgroundColor = '';
  }, 2000);
  
  return false;
}


