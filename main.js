const count = document.getElementById('count');
const increment = document.getElementById('increment');

increment.addEventListener('click', () => {
  const current = parseInt(count.textContent.split(' ')[1]);
  count.textContent = `Count: ${current + 1}`;
});
