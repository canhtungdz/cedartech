const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'Đóng' : 'Menu';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu';
}));
const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.querySelector('input').value.trim();
  status.classList.remove('error');
  status.textContent = `Đã nhận tín hiệu từ ${email}. Chúng tôi sẽ phản hồi sớm.`;
  form.reset();
});
