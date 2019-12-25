const button = document.querySelector('button');

button.addEventListener('click', (this) => {
  console.log(this);
  this.style.backgroundColor = 'red';
});
