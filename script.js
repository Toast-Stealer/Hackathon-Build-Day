const joinButton = document.querySelector('#joinButton');
const joinNote = document.querySelector('#joinNote');

joinButton.addEventListener('click', (event) => {
  event.preventDefault();
  joinButton.innerHTML = 'You’re on the list! <span>✓</span>';
  joinButton.style.background = '#9ed78c';
  joinButton.style.color = '#18181a';
  joinNote.textContent = 'Awesome! We’ll save a spot for you on Build Day.';
});
