(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dialog = document.querySelector('#inquiry-dialog');
  let opener;
  const clearDraft = () => {
    if (!dialog) return;
    const output = dialog.querySelector('[data-draft-output]');
    output.textContent = ''; output.hidden = true;
    dialog.querySelector('.dialog-draft-actions').classList.remove('visible');
    dialog.querySelector('[data-copy-status]').textContent = '';
  };
  document.querySelectorAll('[data-inquiry]').forEach(button => button.addEventListener('click', () => {
    if (!dialog) return;
    opener = button;
    const field = dialog.querySelector('[name=opportunity]');
    if (field && button.dataset.inquiry) field.value = button.dataset.inquiry;
    dialog.querySelector('[name=area]').value = button.dataset.area || 'Still exploring';
    clearDraft();
    dialog.showModal();
  }));
  dialog?.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  dialog?.addEventListener('close', () => opener?.focus());
  let emailText = '';
  dialog?.querySelector('form')?.addEventListener('input', clearDraft);
  dialog?.querySelector('form')?.addEventListener('change', clearDraft);
  dialog?.querySelector('form')?.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const program = String(data.get('program') || '').trim();
    const opportunity = String(data.get('opportunity') || 'Research inquiry');
    const area = String(data.get('area') || 'Still exploring');
    const message = String(data.get('message') || '').trim();
    const subject = `${opportunity} inquiry — ${name}`;
    const body = `Dear Prof. Lee,\n\nMy name is ${name}. I am currently ${program}.\n\nI am interested in ${opportunity.toLowerCase()} at SoBiLab. The research area that caught my attention is ${area}.\n\n${message ? message + '\n\n' : ''}I would appreciate the opportunity to discuss my interests and learn about current opportunities.\n\nBest regards,\n${name}`;
    emailText = `To: jaelee@dgist.ac.kr\nSubject: ${subject}\n\n${body}`;
    const output = dialog.querySelector('[data-draft-output]');
    output.textContent = emailText; output.hidden = false;
    dialog.querySelector('[data-email-draft]').href = `mailto:jaelee@dgist.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    dialog.querySelector('.dialog-draft-actions').classList.add('visible');
    dialog.querySelector('[data-copy-status]').textContent = 'Your draft is ready. Review it, then open your email app or copy the text.';
    output.scrollIntoView({ block: 'nearest', behavior: reduced ? 'instant' : 'smooth' });
  });
  dialog?.querySelector('[data-copy-draft]')?.addEventListener('click', async () => {
    const status = dialog.querySelector('[data-copy-status]');
    try { await navigator.clipboard.writeText(emailText); status.textContent = 'Email draft copied.'; }
    catch (_) { status.textContent = 'Select and copy the draft above.'; }
  });


  const menu = document.getElementById('mobileMenuToggle');
  const mobile = document.getElementById('mobileMenu');
  const updateMenuLabel = () => { const open = !mobile.classList.contains('hidden'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); };
  menu?.addEventListener('click', updateMenuLabel);
  mobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', updateMenuLabel));
})();
