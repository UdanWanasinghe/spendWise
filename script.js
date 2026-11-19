const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  menuToggle.textContent = '☰';
}));
const budgetInput = document.querySelector('#budget');
const spentInput = document.querySelector('#spent');
const remaining = document.querySelector('#remaining');
const progressBar = document.querySelector('#progress-bar');
const budgetStatus = document.querySelector('#budget-status');
const formatLKR = value => 'LKR ' + value.toLocaleString('en-LK', {minimumFractionDigits:2, maximumFractionDigits:2});
function updateCalculator() {
  const budget = Number(budgetInput.value);
  const spent = Number(spentInput.value);
  if (!Number.isFinite(budget) || !Number.isFinite(spent) || budget <= 0 || spent < 0 || budgetInput.value === '' || spentInput.value === '') {
    remaining.textContent = '—';
    budgetStatus.textContent = 'Enter a budget greater than zero and a non-negative amount spent.';
    progressBar.style.width = '0%';
    return;
  }
  const used = spent / budget * 100;
  remaining.textContent = formatLKR(budget - spent);
  progressBar.style.width = Math.min(used, 100) + '%';
  progressBar.style.background = used > 100 ? '#ffaaa5' : used >= 80 ? '#f8d28e' : '#a2f0cf';
  budgetStatus.textContent = used > 100 ? `${used.toFixed(1)}% used — budget exceeded. Consider reviewing expenses.` : used >= 80 ? `${used.toFixed(1)}% used — you're approaching your budget limit.` : `${used.toFixed(1)}% used — you're within your budget.`;
}
budgetInput.addEventListener('input', updateCalculator);
spentInput.addEventListener('input', updateCalculator);
updateCalculator();
document.querySelector('#year').textContent = new Date().getFullYear();
