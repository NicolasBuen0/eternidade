window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll('[data-anime]')), this.init();
  }
  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute('data-anime'));
      isNaN(e) ||
        setTimeout(() => {
          t.classList.add('anime');
        }, e);
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? 'visible' === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener('visibilitychange', this.handleVisibility);
  }
};
new SimpleAnime();


// Função para abrir modais
function openModal(modal) {
  modal.style.display = "block";
}

// Função para abrir o modal de localização
function openLocalModal() {
  var localModal = document.getElementById("myModal");
  openModal(localModal);
}

// Função para abrir o modal de recepção
function openRecepcaoModal() {
  var recepcaoModal = document.getElementById("recepcaoModal");
  openModal(recepcaoModal);
}

// Função para abrir o modal de presente
function openPixModal() {
  var pixModal = document.getElementById("pixModal");
  
  openModal(pixModal);
}

// Função para fechar os modais
function closeModal(modal) {
  modal.style.display = "none";
}

// Eventos de abertura dos modais
var openLocalBtn = document.getElementById("openLocalModal");
var openRecepcaoBtn = document.getElementById("openRecepcaoModal");
var openPixBtn = document.getElementById("openPixModal");

openLocalBtn.onclick = function(event) {
  event.preventDefault();
  openLocalModal();
}

openRecepcaoBtn.onclick = function(event) {
  event.preventDefault();
  openRecepcaoModal();
}

openPixBtn.onclick = function(event) {
  event.preventDefault();
  openPixModal();
}

// Fechar modais ao clicar no botão de fechar
var closeButtons = document.getElementsByClassName("close");

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
      var modal = this.parentElement.parentElement;
      closeModal(modal);
  }
}

// Fechar modais ao clicar fora deles
window.onclick = function(event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          closeModal(modals[i]);
      }
  }
}



