function filter(dept, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    if (dept === 'all' || card.dataset.dept === dept) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
