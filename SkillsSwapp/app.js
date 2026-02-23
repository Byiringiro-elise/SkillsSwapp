// SkillSwap – shared sidebar logic
document.addEventListener('DOMContentLoaded', () => {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('overlay');
  const openBtn  = document.getElementById('menu-btn');

  const open  = () => { sidebar.classList.remove('-translate-x-full'); overlay.classList.remove('hidden'); document.body.classList.add('overflow-hidden'); };
  const close = () => { sidebar.classList.add('-translate-x-full');    overlay.classList.add('hidden');    document.body.classList.remove('overflow-hidden'); };

  if (openBtn)  openBtn.addEventListener('click', open);
  if (overlay)  overlay.addEventListener('click', close);

  // close on nav click (mobile)
  document.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => { if (window.innerWidth < 1024) close(); }));
});
