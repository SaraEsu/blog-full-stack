const btn = document.querySelector('.btn');
const section = document.querySelector('section');

const showAlert = () => {
  alert(`System Error: file size is too big `);
};

btn.addEventListener('click', function (e) {
  section.style.display = 'none';
  setTimeout(showAlert, 300);
});
