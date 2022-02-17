const containerEl = document.getElementById('container');
const btnClose = document.getElementById('close-btn');
const btnOpen = document.getElementById('open-btn');

btnOpen.addEventListener('click', () => {
  containerEl.style.display = 'block';
})

btnClose.addEventListener('click', () => {
  containerEl.style.display = 'none';
})